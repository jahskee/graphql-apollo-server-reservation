const { gql } = require('apollo-server-express');

const bookSchema = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`

module.exports = bookSchema;