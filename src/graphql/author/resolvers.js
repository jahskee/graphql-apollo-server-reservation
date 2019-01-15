const Author = require('../../databases/mlab/collection1/author');
const Book = require('../../databases/mlab/collection1/book');

const authorResolver = {
  Query: {
    author: (parent, args, context, info) => Author.findById(args.id),
    authors: () => Author.find({}),
  },
  Author: {
    books: (parent, args, context, info) => Book.find({authorId: parent.id}),
  },
};

module.exports = authorResolver;
