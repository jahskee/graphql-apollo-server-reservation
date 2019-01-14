const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const merge = require("lodash/merge");
const { mergeTypes } = require("merge-graphql-schemas");
const fs = require('fs');
const https = require('https');
const http = require('http');

/* imported schemas and resolvers */
const bookSchema = require('./graphql/book/schema');
const bookResolvers = require('./graphql/book/resolvers');
const authorSchema = require('./graphql/author/schema');
const authorResolvers = require('./graphql/author/resolvers');


/* merge schema and resolver files */
const typeDefs = mergeTypes([bookSchema, authorSchema]);
const resolvers = merge(bookResolvers, authorResolvers);

const apollo = new ApolloServer({ typeDefs, resolvers })


const configurations = {
  production: { ssl: true, port: 443, hostname: 'production.com' },
  development: { ssl: false, port: 4000, hostname: 'localhost' },
}

const environment = process.env.NODE_ENV || 'production'
const config = configurations[environment]



const app = express()
apollo.applyMiddleware({ app })

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
