const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*----- Hotel ----*/
const schema = new Schema({
    name: String,
    phone: String,
    email: String,
    hotel: String,
    address: String,
    arrival: String,
    departure: String,
    totalAmount: Number
});

module.exports = mongoose.model('Reservation', schema);