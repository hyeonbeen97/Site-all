import React, { useEffect, useState } from 'react';
import Contents from '../layout/Contents';
import ContTitle from '../layout/ContTitle';
import YoutubeSearch from '../youtube/YoutubeSearch';
import YoutubeSlider from '../youtube/YoutubeSlider';
import YoutubeTag from '../youtube/YoutubeTag';
import YoutubeCont from '../youtube/YoutubeCont';

const Youtube = () => {
  const [youtubes, setYoutubes] = useState([]);

  useEffect(() => {
    fetch(
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=tennis&key=AIzaSyBTyYekqKdJKfjwf6aUYLwTbtRLG_jR2H8'
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Contents>
        <ContTitle />
        <YoutubeSearch />
        <YoutubeSlider />
        <YoutubeTag />
        <YoutubeCont youtubes={youtubes} />
      </Contents>
    </>
  );
};

export default Youtube;
