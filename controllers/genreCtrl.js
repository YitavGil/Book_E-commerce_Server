const Genre = require('../models/genreData')
const Books = require('../models/bookModel')

const genreCtrl = {
    getGenres: async(req, res) =>{
        try {
            const genres = await Genre.find()
            res.json(genres)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createGenre: async(req, res) =>{
        try {
            // Only admin can create, delete and update genres
            const {name} = req.body;
            const genre = await Genre.findOne({name})
            if(genre) return res.status(400).json({msg: "This genre already exist."})

            const newGenre = new Genre({name})

            await newGenre.save()
            res.json({msg: "New genre created!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteGenre: async(req, res) =>{
        try {
            const books = await Books.findOne({genre: req.params.id})
            if(books) return res.status(500).json({msg: "Please delete all products with the same genre"}) 
            await Genre.findByIdAndDelete(req.params.id)
            res.json({msg: 'Genre deleted'})
        } catch (err) {
            return res.status(500).json({msg: err.message}) 
        }
    },
    updateGenre: async(req, res) =>{
        try {
           const {name} = req.body;
           await Genre.findOneAndUpdate({_id: req.params.id}, {name})

           res.json({msg: "Genre updated"})
        } catch (err) {
            return res.status(500).json({msg: err.message}) 
        }
    }
}


module.exports = genreCtrl