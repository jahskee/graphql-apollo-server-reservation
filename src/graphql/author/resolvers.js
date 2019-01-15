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
    saveAuthor: (parent, args, context, info) => {
      if (args.id === undefined && args.id === "") {
        // add operation
        console.log("ADDING")
        let author = new Author({ args });
        return author.save();
      } else {
        // update operation
        console.log("UPDATING")
        return Author.update({ _id: args.id }, args);
      }
    },
    deleteAuthor: (parent, args, context, info) => {
      return Author.findOneAndRemove({ _id: args.id });
    },
  },
};

module.exports = resolvers;
