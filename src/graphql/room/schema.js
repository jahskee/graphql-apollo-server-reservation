const { gql } = require('apollo-server-express');

const schema = gql`
  type Room {
    id: ID,
    roomNo: String,
    type: String,
    price: Float,
    description: String,
    pax: Int,
    image: String,
    isOccupied: Boolean,
  }

  type Query {
    room(id: ID): Room
    rooms: [Room]
  }

  type Mutation {  

    saveRoom(id: ID, 
      roomNo: String,
      type: String,
      price: Float,
      description: String,
      pax: Int,
      image: String,
      isOccupied: Boolean
    ): Room

    removeRoom(id: ID!): Room
  }
`;

module.exports = schema;
