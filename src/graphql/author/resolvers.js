const Author = require('../../databases/mlab/collection1/author');
const Book = require('../../databases/mlab/collection1/book');

const resolvers = {
  Author: {
    books: (parent, args, context, info) => Book.find({ authorId: parent.id }),
  },
  Query: {
    author: (parent, args, context, info) => Author.findById(args.id),
    authors: () => Author.find({}),
  },
  Mutation: {
    addAuthor: (parent, args, context, info) => {
      let author = new Author(args);      
      return author.save();
    },

    updateAuthor: (parent, args, context, info) => {
      
      return Author.findOneAndUpdate({ id: args.id }, args);
    },

    deleteAuthor: () => {
      return Author.findOneAndRemove({ id: args.id });
    },
  },
};

module.exports = resolvers;