import '../styles/globals.css';
import { AuthProvider } from '../lib/auth';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import customTheme from '@/styles/theme';
import { Global, css } from '@emotion/react';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          body {
            font-size: 16px;
            box-sizing: border-box;
            /* font-family: 'Inter'; */
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <AuthProvider>
        <GlobalStyle />

        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
