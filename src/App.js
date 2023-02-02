import './App.css';
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
