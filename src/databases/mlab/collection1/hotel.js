const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*----- Hotel ----*/
const schema = new Schema({
    name: String,
    address: String,
    distance: Number,
    price: String,
    image: String,
    cityId: String,
});

module.exports = mongoose.model('Hotel', schema);