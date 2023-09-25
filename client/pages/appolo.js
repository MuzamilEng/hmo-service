
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://tyk.paymax.ng/hmo/graphql',
  }),
  headers: {
    'Content-Type': 'application/json',
    'doctor_name': 'OK',
    '--header\'x-tyk-authorization': 'CHANGEME',
  },
  cache: new InMemoryCache(),
});

export default client;
