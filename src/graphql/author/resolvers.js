const Author = require('../../databases/mlab/collection1/author');
const Book = require('../../databases/mlab/collection1/book');

const authorResolver = {
  Author: {
    books: (parent, args, context, info) => Book.find({ authorId: parent.id }),
  },
  Query: {
    author: (parent, args, context, info) => Author.findById(args.id),
    authors: () => Author.find({}),
  },
};

module.exports = authorResolver;
