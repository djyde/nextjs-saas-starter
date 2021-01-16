import { Provider } from 'next-auth/client'
import { ChakraProvider } from "@chakra-ui/react"
import "reflect-metadata";

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}