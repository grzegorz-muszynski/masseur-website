import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";

import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ForPatient from './pages/ForPatient';
import Gallery from './pages/Gallery';
import Header from './components/Header';
import Location from './pages/Location';
import Menu from './components/Menu';
import Offer from './pages/Offer';
import Opinions from './pages/Opinions';
import Prices from './pages/Prices';
import ScrollToTop from './components/ScrollToTop';
import Start from './pages/Start';
import Thanks from './pages/Thanks';
import Vouchers from './pages/Vouchers';

function App() {
  return (
    <Router>
      <div id='App'>
        <ScrollToTop />
        <Header />
        <Menu />
        <Routes>
          <Route exact path='/' element={<Start />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/offer' element={<Offer />} />
          <Route path='/prices' element={<Prices />} />
          <Route path='/forpatient' element={<ForPatient />} />
          <Route path='/vouchers' element={<Vouchers />} />
          <Route path='/location' element={<Location />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/opinions' element={<Opinions />} /> 
          <Route path='/thanks' element={<Thanks />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;