const Author = require('../../databases/mlab/collection1/author');
const Book = require('../../databases/mlab/collection1/book');

const mongoCRUD = require('../_lib/mongoCRUD');

const resolvers = {
  Author: {
    books: (parent, args, context, info) => Book.find({ authorId: parent.id }),
  },
  Query: {
    author: (parent, args, context, info) => Author.findById(args.id),
    authors: () => Author.find({}),
  },
  Mutation: {
    saveAuthor: mongoCRUD.save(Author),
    removeAuthor: mongoCRUD.remove(Author),
  },
};

module.exports = resolvers;
