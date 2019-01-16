const Book = require('../../databases/mlab/collection1/book');
const Author = require('../../databases/mlab/collection1/author');

const mongoCRUD = require('../_lib/mongoCRUD');

const resolvers = {
  Book: {
    // set graph relationship here with other records
    author: (parent, args, context, info) => Author.findById(parent.authorId),
  },
  Query: {
    book: mongoCRUD.findOne(Book),
    books: mongoCRUD.findAll(Book),

    // custom queries go here
  },
  Mutation: {
    // add when id is undefined, else update when id is defined
    saveBook: mongoCRUD.save(Book, 'Book'),
    removeBook: mongoCRUD.remove(Book, 'Book'),
  },
};

module.exports = resolvers;
