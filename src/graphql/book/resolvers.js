
const books = [
    { title: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling' },
    { title: 'Jurassick Park', author: 'Michael Crichton' },
];

const bookResolver = {
    Query: {
      books: () => books,
    },
}

module.exports = bookResolver;