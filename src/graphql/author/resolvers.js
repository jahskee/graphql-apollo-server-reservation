
const Author = require('../../databases/mlab/collection1/author');

const authorResolver = {
    Query: {
      authors: () => Author.find({}),
    },
}

module.exports = authorResolver;