const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*---- Author ----*/
const schema = new Schema({
    name: String,
    age: Number,
});

module.exports = mongoose.model('Author', schema);
