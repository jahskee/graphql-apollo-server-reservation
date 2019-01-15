const Book = require('../../databases/mlab/collection1/book');
const Author = require('../../databases/mlab/collection1/author');

const bookResolver = {
  Book: {
    author: (parent, args, context, info) => Author.findById(parent.authorId),
  },
  Query: {
    book: (parent, args, context, info) => Book.findById(args.id),
    books: () => Book.find({}),
  },
};

module.exports = bookResolver;
