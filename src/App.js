
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';


  function App() {
  return (
    <div className="App">
      <Nav  />
      <Banner/>
      <Row ecorowID="1" id="netflix-original"title="NetFlix Original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row ecorowID="4" id="trending-now" title="Trending" fetchUrl={requests.fetchTrendingNow} />
      <Row ecorowID="3" id="top-rated" title="Top Rated Videos" fetchUrl={requests.fetchTopRated} />
      <Row ecorowID="2" id="popular" title="Popular Videos" fetchUrl={requests.fetchPopular} />
      <Row ecorowID="5" id="now-playing" title="NowPlaying" fetchUrl={requests.fetchNowPlaying} />
      <Row ecorowID="6" id="upcoming" title="Upcoming" fetchUrl={requests.fetchUpcoming} />
     
    </div>
    
  );
  }


export default App;
