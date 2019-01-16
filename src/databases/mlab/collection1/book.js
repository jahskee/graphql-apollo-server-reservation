const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*---- Book ----*/
const schema = new Schema({
    name: String,
    genre: String,
    authorId: String,
});

module.exports = mongoose.model('Book', schema);
