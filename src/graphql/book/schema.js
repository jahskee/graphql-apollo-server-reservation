const { gql } = require('apollo-server-express');

const bookSchema = gql`
  type Book {
    id: ID
    name: String
    genre: String
  }

  type Query {
    books: [Book]
  }
`

module.exports = bookSchema;