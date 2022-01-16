import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import UpcomingEvent from "./components/UpcomingEvent/UpcomingEvent";
import Instructors from "./components/Instructors/Instructors";
import Schedule from "./components/Schedule/Schedule";
import Pricing from "./components/Pricing/Pricing";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Calendar from "./components/Calendar/Calendar";
import "./App.scss";

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
      <Calendar />
      <ContactUs />
      <Footer />
    </Router>
  );
}

export default App;
