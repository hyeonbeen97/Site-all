import React from 'react';
import Contents from '../layout/Contents.jsx';

import Slider from '../section/Slider.jsx';
import Intro from '../section/Intro.jsx';
import Member from '../section/Member.jsx';
import Port from '../section/Port.jsx';
import Youtube from '../section/Youtube.jsx';
import Unsplash from '../section/Unsplash.jsx';
import Movie from '../section/Movie.jsx';

const Home = () => {
  return (  
  <>
    <Contents>
      <Slider attr="slider__wrap score" />
      <Intro attr='intro__wrap core3 section'/>
      <Member attr='member__wrap core3 section center' />
      <Port attr='port__wrap core3 section center' />
      <Youtube attr='youtube__wrap core3 section' />
      <Unsplash attr='unsplash__wrap core3 section' />
      <Movie attr='movies__wrap core3 section'/>
    </Contents>
  </>
  )
};

export default Home;
