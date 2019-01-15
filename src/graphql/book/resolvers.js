
const books = [
    { title: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling' },
    { title: 'Jurassick Park', author: 'Michael Crichton' },
];
const Book = require('../../databases/mlab/collection1/book');

const bookResolver = {
    Query: {
      books: () => Book.find({}),
    },
}

module.exports = bookResolver;