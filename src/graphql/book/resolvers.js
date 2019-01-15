const Book = require('../../databases/mlab/collection1/book');

const bookResolver = {
  Query: {
    book: (parent, args, context, info) => Book.findById(args.id),
    books: () => Book.find({}),
  },
};

module.exports = bookResolver;
