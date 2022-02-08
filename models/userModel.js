const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {   // If user role = 1 --> admin
        type: Number,
        default: 0,
    },
    cart: {
        type: Array,
        default: []
    },

    library: [{
        type: mongoose.Types.ObjectId,
        ref: 'book'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)