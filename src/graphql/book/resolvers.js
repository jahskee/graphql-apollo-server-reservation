const Book = require('../../databases/mlab/collection1/book');
const Author = require('../../databases/mlab/collection1/author');

const resolvers = {
  Book: {
    author: (parent, args, context, info) => Author.findById(parent.authorId),
  },
  Query: {
    book: (parent, args, context, info) => Book.findById(args.id),
    books: () => Book.find({}),
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
      let author = new Author(args);
      return book.save();
    },

    updateBook: (parent, args, context, info) => {
      return Book.findOneAndUpdate({_id: args.id}, args);
    },

    deleteBook: (parent, args, context, info) => {      
      return Book.findOneAndRemove({ _id: args.id});
    },
  },
}

module.exports = resolvers;
