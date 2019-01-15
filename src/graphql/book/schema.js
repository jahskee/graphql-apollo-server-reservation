const { gql } = require('apollo-server-express');

const bookSchema = gql`
  type Book {
    id: ID
    name: String
    genre: String
  }

  type Query {
    book(id: ID): Book
    books: [Book]
  }
`;

module.exports = bookSchema;
