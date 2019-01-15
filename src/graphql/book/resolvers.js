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
        let book = new Book({
            name: args.name,
            genre: args.genre,
            authorId: args.authorId,
        })

        return book.save();

      },
  }
}

module.exports = resolvers;
