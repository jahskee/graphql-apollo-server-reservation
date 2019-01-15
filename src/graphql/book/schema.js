const { gql } = require('apollo-server-express');

const schema = gql`
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }

  type Query {
    book(id: ID): Book
    books: [Book]
  }

  type Mutation {
    addBook(name: String!, genre: String!, authorId: ID!): Book
    updateBook(id: ID!, name: String!, genre: String!, authorId: ID!): Book
    deleteBook(id: ID!): Book
  }
`;

module.exports = schema;
