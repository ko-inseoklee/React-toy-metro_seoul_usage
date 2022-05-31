import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import theme from './theme/metro_theme';
import Home from './pages/home/Home';


const App = () => {
  return(
    <ChakraProvider theme={theme}>
      <Home></Home>
    </ChakraProvider>
  )
}

export default App;
