import React from 'react';
const YoutubeItem = ({ youtube }) => {
  return (
    <li>
      <img src={youtube.snippet.thumbnails.medium.url} alt="youtube" />
      <span>{youtube.snippet.title}</span>
    </li>
  );
};

const YoutubeCont = ({ youtubes }) => {
  return (
    <section id="youtubePage" className="container">
      <div className="youtube__page container" />
      <div className="youtube__slider">youtube__slider</div>
      <div className="youtube__cont">
        <ul>
          {youtubes.map((youtube, index) => (
            <YoutubeItem key={index} youtube={youtube} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default YoutubeCont;
