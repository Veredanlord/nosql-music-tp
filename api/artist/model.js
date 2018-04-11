const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    id: {
        type: string,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: false
    },
    nationality: {
        type: String,
        required: true,
        unique: false
    },
    style: {
        type: String,
        required: true,
        unique: false
    }
});

module.exports = mongoose.model('artist', ArtistSchema);