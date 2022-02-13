import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css';
import './App.css';
import NavBar from "./NavBar";
import Home from './pages/Home';
import Kingpin from './pages/Kingpin';
import Incarnate from './pages/Incarnate';
import About from './pages/About';

const App = () => {
  useEffect(() => {
    document.title = "kingpin"
  }, []);

  return (
    <div className="App">
    <HashRouter basename="/">
      <NavBar />
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path="/kingpin" element={<Kingpin/>} />
          <Route exact path="/incarnate" element={<Incarnate/>} />
          <Route exact path="/about" element={<About/>} />
      </Routes>
    </HashRouter>
    <br></br>
    <p> disclaimer: in progress project - currently shown images will be 
        replaced by original illustrations. until then, image credits 
        to original artists </p>
    </div>
  );
}

export default App;
