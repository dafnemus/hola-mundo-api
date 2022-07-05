import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { IResolvers } from '@graphql-tools/utils';
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.use(cors());

app.use(compression());

const typeDefs = `
  type Query {
    greetingBasic: String!
    greetingPerson(name: String!): String!
    greetingWelcomeAPI: String!
  }
`;

const resolvers: IResolvers = {
  Query: {
    greetingBasic(): string {
      return 'Hello World';
    },
    greetingPerson(__: void, { name }): string {
      return `Hello ${name}`;
    },
    greetingWelcomeAPI(): string {
      return 'Welcome to Hello(API GraphQL)';
    },
  },
};

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use('/', graphqlHTTP({ schema, graphiql: true }));

const PORT = 5300;

app.listen({ port: PORT }, () =>
  console.log(`Url Hello API GraphQL http://localhost:${PORT}/graphql`)
);
