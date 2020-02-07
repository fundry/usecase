import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const URL = process.env.GRAPHQL_URL;
console.log(URL, 'url');

const httpLink = HttpLink({
  uri: URL,
});

const cache = InMemoryCache();

const Client = new ApolloClient({
  link: httpLink,
  cache,
});

export default Client;
