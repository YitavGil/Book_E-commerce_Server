const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },

    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },

    book: {
        type: mongoose.Types.ObjectId,
        ref: 'book'
    }
})

module.exports = mongoose.model('review', reviewSchema)