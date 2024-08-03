import React from 'react';
import { ChakraProvider, CSSReset, Box, extendTheme } from '@chakra-ui/react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard/Dashboard';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Header />
      <Sidebar />
      <Box ml="250px" p={4}>
        <Dashboard />
      </Box>
      <Footer />
    </ChakraProvider>
  );
};

export default App;
