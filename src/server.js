import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import fs from 'fs'
import https from 'https'
import http from 'http'

const books = [
  { title: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling' },
  { title: 'Jurassick Park', author: 'Michael Crichton' },
]

/* in local fedora
export NODE_ENV='development'
*/
const configurations = {
  // Note: You may need sudo to run on port 443
  production: { ssl: true, port: 443, hostname: 'production.com' },
  development: { ssl: false, port: 4000, hostname: 'localhost' },
}

const environment = process.env.NODE_ENV || 'production'
const config = configurations[environment]

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`

const resolvers = {
  Query: {
    books: () => books,
  },
}

const apollo = new ApolloServer({ typeDefs, resolvers })

const app = express()
apollo.applyMiddleware({ app })

// Create the HTTPS or HTTP server, per configuration
var server
if (config.ssl) {
  // Assumes certificates are in .ssl folder from package root. Make sure the files
  // are secured.
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
