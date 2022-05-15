import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'lib/apolloClient';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
