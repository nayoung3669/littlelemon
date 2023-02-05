import './App.css';
import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import About from './components/main/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './components/main/Homepage.js';
import Booking from './components/booking/Booking.js';
import OnlineOrder from './components/online/OnlineOrder.js'

function App() {

  return (
    <div className="App">
      <ChakraProvider>
        <Nav />
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="about" element={<About />}/>
            <Route path="booking" element={<Booking />}/>
            <Route path="onlineOrder" element={<OnlineOrder />}/>
          </Routes>
        <Homepage />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
