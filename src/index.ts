import { ApolloServer, gql } from 'apollo-server';
import { schema } from './graphql/graphql';

const server = new ApolloServer({
  schema,
});

const main = async (port: number = 4000): Promise<void | never> => {
  try {
    const { url } = await server.listen(process.env.PORT || port);
    console.info(`Server running on ${url}`);
  } catch (error) {
    throw new Error(`Apollo server error: ${error}`);
  }
};

main();
