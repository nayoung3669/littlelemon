import './App.css';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/main/Main';

function App() {

  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
