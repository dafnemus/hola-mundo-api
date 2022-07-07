import express from 'express';
// import { graphqlHTTP } from 'express-graphql';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http';

const app = express();

app.use(cors());

app.use(compression());

// app.use('/', graphqlHTTP({ schema, graphiql: true })); with graphql express
let server = null;

const startServer = async () => {
  server = new ApolloServer({
    schema,
    introspection: true
  })
  await server.start()
  server.applyMiddleware({ app });
}


const PORT = 5300;
startServer();
const httpServer = createServer(app)

httpServer.listen({ port: PORT }, () =>
  console.log(`Url Hello API GraphQL http://localhost:${PORT}/graphql`)
);
