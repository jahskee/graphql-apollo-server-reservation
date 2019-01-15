const { gql } = require('apollo-server-express');

const authorSchema = gql`
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
`;

module.exports = authorSchema;
