import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import UpcomingEvent from './components/UpcomingEvent'
import Instructors from './components/Instructors'
import './App.scss';

function App() {
  return (    
    <Router>
      <Header />
      <Navbar />
      <Landing />
      <UpcomingEvent />
      <Instructors />
    </Router>        
  );
}

export default App;
