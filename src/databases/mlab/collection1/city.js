const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*----- City ----*/
const schema = new Schema({
    city: String,
    state: String,
});

module.exports = mongoose.model('City', schema);