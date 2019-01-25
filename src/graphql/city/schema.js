const { gql } = require('apollo-server-express');

const schema = gql`
  type City {
    id: ID,
    city: String
    state: String
  }

  type Query {
    city(id: ID): City
    cities: [City]
  }

  type Mutation {  

    saveCity(id: ID, 
      city: String
      state: String
    ): City
      
    removeCity(id: ID!): City
  }
`;

module.exports = schema;
