import './App.css';
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {

  const toggleBtn = document.querySelector('.hamburger');
  const menu = document.querySelector('.navbar_menu');

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  })

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
