import { IResolvers } from "@graphql-tools/utils";

const query: IResolvers = {
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

export default query;
