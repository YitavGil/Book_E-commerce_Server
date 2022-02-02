const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: {
       type: String,
       required: true 
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number
    },
    description: {
        type: String
    },
    checked: {
        type: Boolean,
        default: false
    },
    imageUrl: {
        type: String,
        required: true
    },
    genre: { 
        type: mongoose.Types.ObjectId,
        ref: 'genre',
        required: true
    }
}, {
    timestamps: true
})

const Book = mongoose.model('book', bookSchema);

module.exports = Book;