const { gql } = require('apollo-server-express');

const schema = gql`
  type Author {
    id: ID
    name: String
    age: Int
    books: [Book]
  }

  type Query {
    author(id: ID): Author
    authors: [Author]
  }

  type Mutation {
    addAuthor(name: String!, age: Int!): Author
    updateAuthor(id: ID!, name: String, age: Int): Author
    deleteAuthor(id: ID!): String
  }
`;

module.exports = schema;