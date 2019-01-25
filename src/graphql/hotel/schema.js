const { gql } = require('apollo-server-express');

const schema = gql`
  type Hotel {
    id: ID,
    name: String,
    address: String,
    distance: Float,
    price: Float,
    image: String,
    cityId: String
  }

  type Query {
    hotel(id: ID): Hotel
    hotels: [Hotel]
  }

  type Mutation {  

    saveHotel(id: ID, 
      name: String!,
      address: String,
      distance: Float,
      price: Float,
      image: String,
      cityId: String,
    ): Hotel
      
    removeHotel(id: ID!): Hotel
  }
`;

module.exports = schema;
