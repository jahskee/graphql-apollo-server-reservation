const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*----- Room ----*/
const schema = new Schema({
    roomNo: String,
    type: String,
    price: Number,
    description: String,
    pax: Number,
    image: String,
    isOccupied: Boolean,
});

module.exports = mongoose.model('Room', schema);