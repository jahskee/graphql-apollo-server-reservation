const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const merge = require("lodash/merge");
const { mergeTypes } = require("merge-graphql-schemas");
const mongoose = require('mongoose');
const fs = require('fs');
const https = require('https');
const http = require('http');

/* connect to mlab mongodb database */
mongoose.connect('mongodb://hilton:hilton123@ds155614.mlab.com:55614/hiltondb', {useNewUrlParser: true});
mongoose.connection.once('open',() => {
    console.log(`connected to database`);
});

/* imported schemas and resolvers */
const book = require('./graphql/book');
const author = require('./graphql/author');


/* merge schema and resolver files */
const typeDefs = mergeTypes([book.schema, author.schema]);
const resolvers = merge(book.resolvers, author.resolvers);

const apollo = new ApolloServer({ typeDefs, resolvers })


const configurations = {
  production: { ssl: true, port: 443, hostname: 'production.com' },
  development: { ssl: false, port: 4000, hostname: 'localhost' },
}

const environment = process.env.NODE_ENV || 'production'
const config = configurations[environment]

const app = express()
apollo.applyMiddleware({ app })

// to run local plese do: export NODE_ENV='development'
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
