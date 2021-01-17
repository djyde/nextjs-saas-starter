import { Provider } from 'next-auth/client'
import { ChakraProvider } from "@chakra-ui/react"
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/api/gql',
  cache: new InMemoryCache()
});

export default function App({ Component, pageProps }) {
  return (

    <Provider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </Provider>
  )
}