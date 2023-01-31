const mongoose = require('mongoose');

// Schema MODELO aka Tabla aka Colection
const SchemaJokes = mongoose.Schema({
    setup: String,
    punchline: String
});

const Joker = mongoose.model('Joker', SchemaJokes);

module.exports = Joker;