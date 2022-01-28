const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },

    user: {
        type: mongoose.Types.ObjectId,
        ref: 'Users'
    },

    book: {
        type: mongoose.Types.ObjectId,
        ref: 'book'
    }
})

module.exports = mongoose.model('review', reviewSchema)