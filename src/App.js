import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";

import About from './pages/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Prices from './pages/Prices';
import Menu from './components/Menu';
import MenuBackground from './components/MenuBackground';
import Offer from './pages/Offer';
import Start from './pages/Start';

function App() {
  return (
    <Router>
      <div id='App'>
        <Header />
        <Menu />
        <MenuBackground />
        <Routes>
          <Route exact path='/' element={<Start />} />
          <Route path='/about' element={<About />} />
          <Route path='/offer' element={<Offer />} />
          <Route path='/prices' element={<Prices />} />
          {/* <Route path='/swimming' element={<Swimming />} />
          <Route path='/forpatient' element={<ForPatient />} />
          <Route path='/opinions' element={<Opinions />} />
          <Route path='/contact' element={<Contact />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;