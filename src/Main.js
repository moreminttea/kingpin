import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import Home from './pages/Home';
import Kingpin from './pages/Kingpin';
import Incarnate from './pages/Incarnate';
import About from './pages/About';

const Main = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/kingpin" element={<Kingpin/>} />
        <Route path="/incarnate" element={<Incarnate/>} />
        <Route path="/about" element={<About/>} />
    </Routes>
  );
}

export default Main;