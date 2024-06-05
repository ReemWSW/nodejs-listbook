const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    published_date: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('Book', bookSchema);
