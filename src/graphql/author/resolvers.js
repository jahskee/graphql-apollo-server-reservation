const Author = require('../../databases/mlab/collection1/author');

const authorResolver = {
  Query: {
    author: (parent, args, context, info) => Author.findById(args.id),
    authors: () => Author.find({}),
  },
};

module.exports = authorResolver;
