import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';

const app = express();

app.use(cors());

app.use(compression());

app.use('/', graphqlHTTP({ schema, graphiql: true }));

const PORT = 5300;

app.listen({ port: PORT }, () =>
  console.log(`Url Hello API GraphQL http://localhost:${PORT}/graphql`)
);
