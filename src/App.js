import './App.css';
import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import About from './components/main/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './components/main/Homepage.js';
import BookingPage from './components/booking/BookingPage';
import OnlineOrder from './components/online/OnlineOrder.js'
import ConfirmedBooking from './components/booking/ConfirmedBooking';

function App() {

  return (
    <div className="App">
      <ChakraProvider>
        <Nav />
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/booking" element={<BookingPage />}/>
            <Route path="/onlineOrder" element={<OnlineOrder />}/>
            <Route path="/booking/confirmation" element={<ConfirmedBooking />} />
          </Routes>
        {/* <Homepage /> */}
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
