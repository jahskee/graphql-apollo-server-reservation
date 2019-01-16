const Author = require('../../databases/mlab/collection1/author');
const Book = require('../../databases/mlab/collection1/book');

const mongoCRUD = require('../_lib/mongoCRUD');

const resolvers = {
  Author: {
    // set graph relationship here with other records
    books: (parent, args, context, info) => Book.find({ authorId: parent.id }),
  },
  Query: {
    author: mongoCRUD.findOne(Author),
    authors: mongoCRUD.findAll(Author),

    // custom queries go here
  },
  Mutation: {
    // add when id is undefined, else update when id is defined
    saveAuthor: mongoCRUD.save(Author, 'Author'),
    removeAuthor: mongoCRUD.remove(Author, 'Author'),
  },
};

module.exports = resolvers;
