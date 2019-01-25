const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const merge = require("lodash/merge");
const { mergeTypes } = require("merge-graphql-schemas");
const mongoose = require('mongoose');
const fs = require('fs');
const https = require('https');
const http = require('http');
const cors = require('cors');



/* connect to mongodb database */
const mongodb_connection = process.env.MONGODB_CONNECTION;
mongoose.connect(mongodb_connection, {useNewUrlParser: true});
mongoose.connection.once('open',() => {
    console.log(`connected to database`);
});

const app = express()
app.use(cors());

/* ====== GraphQL Start ===== */
const room = require('./graphql/room');
const hotel = require('./graphql/hotel');
const city = require('./graphql/city');
const reservation = require('./graphql/reservation');


/* merge schema and resolver files */
const typeDefs = mergeTypes([room.schema, hotel.schema, city.schema, reservation.schema]);
const resolvers = merge(room.resolvers, hotel.resolvers, city.resolvers, reservation.resolvers);

const apollo = new ApolloServer({ typeDefs, resolvers })
apollo.applyMiddleware({ app })
/* ====== GraphQL End ===== */

/* ====== REST API - Start ========*/
const apiReservations = require("./rest/reservation/reservation-routes");
app.use("/rest/api", apiReservations);
/* ====== REST API - End ========*/


const configurations = {
  production: { ssl: true, port: 443, hostname: 'production.com' },
  development: { ssl: false, port: 4000, hostname: 'localhost' },
}

const environment = process.env.NODE_ENV || 'production'
const config = configurations[environment]


// to run local dev please do: export NODE_ENV='development'
var server
if (config.ssl) {
  server = https.createServer(
    {
      key: fs.readFileSync(`./ssl/${environment}/server.key`),
      cert: fs.readFileSync(`./ssl/${environment}/server.crt`),
    },
    app
  )
} else {
  server = http.createServer(app)
}

apollo.installSubscriptionHandlers(server)

server.listen({ port: config.port }, () =>
  console.log(
    '🚀 Server ready at',
    `http${config.ssl ? 's' : ''}://${config.hostname}:${config.port}${
      apollo.graphqlPath
    }`
  )
)
