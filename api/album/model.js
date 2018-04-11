const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: false
    },
    artistName: {
        type: String,
        required: true,
        unique: false
    },
    price: {
        type: String,
        required: true,
        unique: false
    },
    image: {
        type: String,
        required: true,
        unique: false
    }
});

module.exports = mongoose.model('album', AlbumSchema);