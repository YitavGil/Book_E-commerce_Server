const Book = require('../models/bookModel');
const Genre = require('../models/genreData');
const books = require('../data/booksData');
const mongoose = require('mongoose');


// Filter, sort and paginating
class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
        const queryObj = {...this.queryString} //query = req.query
       
        const excludedFields = ["page", "sort", "limit"];
        excludedFields.forEach(el => delete(queryObj[el]));

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

        this.query.find(JSON.parse(queryStr))

        return this;
    }

    sorting(){
        if(this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(" ")
            this.query = this.query.sort(sortBy)
        } else{
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 15
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this
    }
}


const bookCtrl = {
    getAllBooks: async (req, res) => {
        try {
            console.log(req.query);
            const features = new APIfeatures(Book.find({}).populate('genre'), req.query).filtering().sorting().paginating()
            const books = await features.query;

            res.json({
                status: 'success',
                result: books.length,
                books: books
            })
        }
        catch (err){
            console.log(err);
            res.status(500).json({msg: "Server Error"});
        }
    },
    getBookById: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            res.json(book)
        }
        catch (err){
            console.log(err);
            res.status(500).json({msg: "Server Error"});
        }
    },
    createBook: async(req, res) =>{
        try {
            const {name, author, price, description, genre, images} = req.body;
            if(!images) return res.status(400).json({msg: "please upload an image"})

            const book = await Book.findOne({name})
            if(book) return res.status(400).json({msg: "This book already exist."})

            const newBook = new Book({
                name: name.toLowerCase(), author, price, description, genre, images
            })

            await newBook.save()
            res.json({msg: "Created a book!"})
        } catch (err) {
            console.log(err);
            res.status(500).json({msg: "Server Error"});
        }
    },
    deleteBook: async(req, res) =>{
        try {
            await Book.findByIdAndDelete(req.params.id)
            res.json({msg: "Book deleted."})
        } catch (err) {
            console.log(err);
            res.status(500).json({msg: "Server Error"});
        }
    },
    updateBook: async(req, res) =>{
        try {
           const {name, author, price, description, genre, images} = req.body;
           if(!images) return res.status(400).json({msg: "please upload an image"})
           
           await Book.findOneAndUpdate({_id: req.params.id}, {
            name: name.toLowerCase(), author, price, description, genre, images
           })

           res.json({msg: "Product updated"})
        } catch (err) {
            console.log(err);
            res.status(500).json({msg: "Server Error"});
        }
    },
    importBooks: async  (req, res) => {
   
        for(let i=0; i<books.length; i++){
            console.log(books[i].name);
            const book = await Book.findOne({
                name: books[i].name
            })
            if (book){
                book.countInStock += books[i].countInStock
                await book.save();
            } else {
                try{
                    console.log("Genre is ", books[i].genre);
                    const idBook = {...books[i], 
                    genre: mongoose.Types.ObjectId(books[i].genre)
                    }
                    const newBook = new Book(idBook);
                    await newBook.save()
                }catch(e){
                    console.log(e)
                    res.status(500).json({msg: "Server Error"});
                }
            }     
        }

            res.status(200).send()
    }
    
}






module.exports = bookCtrl

