const { gql } = require('apollo-server-express');

const schema = gql`
  type Reservation {
    id: ID,
    name: String!,
    phone: String,
    email: String,
    hotel: String,
    address: String,
    arrival: String,
    departure: String,
    totalAmount: Float
  }

  type Query {
    reservation(id: ID): Reservation
    reservations: [Reservation]
  }

  type Mutation {  

    saveReservation(
      id: ID, 
      name: String,
      phone: String,
      email: String,
      hotel: String,
      address: String,
      arrival: String,
      departure: String,
      totalAmount: Float
    ): Reservation
      
    removeReservation(id: ID!): Reservation
  }
`;

module.exports = schema;
