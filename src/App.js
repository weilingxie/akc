import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import UpcomingEvent from './components/UpcomingEvent'
import Instructors from './components/Instructors'
import Schedule from './components/Schedule'
import Pricing from './components/Pricing'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import './App.scss';

function App() {
  return (    
    <Router>
      <Header />
      <Navbar />
      <Landing />
      <UpcomingEvent />
      <Instructors />
      <Schedule />
      <Pricing />
      <AboutUs />
      <ContactUs />
      <Footer />
    </Router>        
  );
}

export default App;
