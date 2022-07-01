import React from 'react';
import {ChakraProvider, Divider} from '@chakra-ui/react';
import theme from './theme/MetroThemes';
import Home from './pages/home/Home';
import MetroRouter from './config/router';
import Header from './components/Header';


const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <>
        <Divider />
        <MetroRouter></MetroRouter>      
      </>
    </ChakraProvider>
  );
}

export default App;
