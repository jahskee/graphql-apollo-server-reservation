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
    saveBook(id: ID, name: String, genre: String): Book
    removeBook(id: ID!): Book
  }
`;

module.exports = schema;
