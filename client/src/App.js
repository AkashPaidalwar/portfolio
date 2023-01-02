import "./App.css";
import React from "react";
import Topbar from "./components/Topbar";
import Greetings from "./components/Greetings";
import Experties from "./components/Experties";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="AppContainer">
      <Topbar />
      <Greetings />
      <Experties />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
