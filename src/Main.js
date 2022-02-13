import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Kingpin from './pages/Kingpin';
import Incarnate from './pages/Incarnate';
import About from './pages/About';

const Main = () => {
  return (
    <div>
    <HashRouter basename="/">
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/kingpin" element={<Kingpin/>} />
          <Route path="/incarnate" element={<Incarnate/>} />
          <Route path="/about" element={<About/>} />
      </Routes>
    </HashRouter>
    </div>
  );
}

export default Main;