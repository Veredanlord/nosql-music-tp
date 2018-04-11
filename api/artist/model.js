const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
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
