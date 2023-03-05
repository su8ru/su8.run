import type { AppProps } from "next/app";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import Footer from "components/footer";
import theme from "libs/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Flex minW="100%" minH="var(--chakra-vh)" direction="column">
        <Box as="main">
          <Component {...pageProps} />
        </Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}
