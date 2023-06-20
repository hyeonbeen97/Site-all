import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './components/pages/Home.jsx';
import MemberPage from './components/pages/MemberPage.jsx';
import IntroPage from './components/pages/IntroPage.jsx';
import YoutubePage from './components/pages/YoutubePage.jsx';
import MoviePage from './components/pages/MoviePage.jsx';
import UnsplashPage from './components/pages/UnsplashPage.jsx';
import PortPage from './components/pages/PortPage.jsx';


const App = () => {
  return (
    <BrowserRouter>
    <Header attr={'header__wrap score3 bg-blue'} />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/member" element={<MemberPage />} />
        <Route path="/port" element={<PortPage />} />
        <Route path="/youtube" element={<YoutubePage />} />
        <Route path="/unsplash" element={<UnsplashPage />} />
        <Route path="/movie" element={<MoviePage />} />
    </Routes>
    <Footer attr={'footer__wrap section score3 bg-blue'} />
</BrowserRouter>
  )
}

export default App
