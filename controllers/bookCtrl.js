const Book = require('../models/bookModel');
const Genre = require('../models/genreData');
const books = require('../data/booksData');

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({}).populate('genre');
        res.json(books)
    }
    catch (err){
        console.log(err);
        res.status(500).json({msg: "Server Error"});
    }
}

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.json(book)
    }
    catch (err){
        console.log(err);
        res.status(500).json({msg: "Server Error"});
    }
}


const importBooks = async  (req, res) => {
    for(let i=0; i<books.length; i++){
        console.log(books[i].name);
        const book = await Book.findOne({
            name: books[i].name
        })
        if (book){
            book.countInStock += books[i].countInStock
        } else {
            try{
                const newBook = new Book(books[i]);
                await newBook.save()
            }catch(e){
                console.log(e)
                res.status(500).send();
            }
        }     
    }
    res.send();
}


module.exports = {
    getAllBooks,
    getBookById,
    importBooks
}