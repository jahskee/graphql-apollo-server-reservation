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
      let author = new Author({
        name: args.name,
        age: args.age,
      });
      return author.save();
    },

    updateAuthor: (parent, args, context, info) => {
      const { id, name, age } = args;
      return Author.findOneAndUpdate({ id }, { name, age });
    },

    deleteAuthor: (parent, args, context, info) => {
      return Author.findOneAndUpdate({ id }, { name });
    },
  },
};

module.exports = resolvers;
