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
      if (args.id === undefined) {
        let author = new Author(args);
        return author.save().then(record => {
          console.log(`New record added id : ${record.id} `);
          return record;
        });
      } else {      
        return Author.findOneAndUpdate({ _id: args.id }, args).then( record => {
          console.log(`Update made on record with id : ${record.id} `);
          return record;
        });
      }
    },
    deleteAuthor: (parent, args, context, info) => {
      return Author.findOneAndRemove({ _id: args.id });
    },
  },
};

module.exports = resolvers;
