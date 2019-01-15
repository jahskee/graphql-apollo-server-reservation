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
  },
};

module.exports = resolvers;
