const Author = require('../../databases/mlab/collection1/author');
const Book = require('../../databases/mlab/collection1/book');

const GenericCRUD = require('../_lib/GenericCRUD');

const resolvers = {
  Author: {
    books: (parent, args, context, info) => Book.find({ authorId: parent.id }),
  },
  Query: {
    author: (parent, args, context, info) => Author.findById(args.id),
    authors: () => Author.find({}),
  },
  Mutation: {
    saveAuthor: GenericCRUD.save(Author),
    deleteAuthor: (parent, args, context, info) => {
      return Author.findOneAndRemove({ _id: args.id });
    },
  },
};

module.exports = resolvers;
