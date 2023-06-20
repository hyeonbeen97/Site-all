import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './components/pages/Home';
import Member from './components/pages/Member';
import Port from './components/pages/Port';
import Youtube from './components/pages/Youtube';
import Unsplash from './components/pages/Unsplash';
import Movie from './components/pages/Movie';

function App() {
  return (
    <BrowserRouter>
      <Header attr={'header__wrap score3 bg-blue'} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Member" element={<Member />} />
        <Route path="/Port" element={<Port />} />
        <Route path="/Youtube" element={<Youtube />} />
        <Route path="/Unsplash" element={<Unsplash />} />
        <Route path="/Movie" element={<Movie />} />
      </Routes>
      <Footer attr={'footer__wrap section score3 bg-blue'} />
    </BrowserRouter>
  );
}

export default App;
