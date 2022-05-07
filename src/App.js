import React, { useEffect, useState } from "react";
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
import db from "./helpers/firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [config, setConfig] = useState({});
  useEffect(() => {
    const getConfig = async () => {
      const querySnapshot = await getDocs(collection(db, "config"));
      querySnapshot.forEach((doc) => {
        setConfig(doc.data());
        console.log(doc.data());
      });
    };
    getConfig();
  }, []);

  return (
    <Router>
      <Header
        address={config.address}
        email={config.email}
        phone={config.phone}
        facebook={config.facebook}
        youtube={config.youtube}
      />
      <Navbar />
      <Landing
        membershipUrl={config.membershipUrl}
        landingVideoUrl={config.landingVideoUrl}
      />
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
