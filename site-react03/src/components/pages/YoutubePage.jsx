import Contents from '../layout/Contents';
import ContTitle from '../layout/ContTitle';
import YoutubeSearch from '../youtube/YoutubeSearch';
import YoutubeSlider from '../youtube/YoutubeSlider';
import YoutubeTag from '../youtube/YoutubeTag';
import YoutubeCont from '../youtube/YoutubeCont';

const Youtube = () => {
  return (
    <>
      <Contents>
        <ContTitle title="Youtube" />
        <YoutubeSearch />
        <YoutubeSlider />
        <YoutubeTag />
        <YoutubeCont />
      </Contents>
    </>
  );
};

export default Youtube;

