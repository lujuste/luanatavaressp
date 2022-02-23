import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../shared/styles/theme';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../shared/styles/styles.scss';
import { FormControlProvider } from '../contexts/OpenFormControl';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <FormControlProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </FormControlProvider>
    </ChakraProvider>
  );
}

export default MyApp;
