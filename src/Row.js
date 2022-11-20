import React, { useEffect, useState } from 'react'
import axios from "axios";
import requests from "./requests"
import "./Row.css"
import movieTrailer from "movie-trailer";
import YouTube from 'react-youtube';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';



const Row = ({ title, fetchUrl, isLargeRow, ecorowID, id }) => {

  const movieBaseUrl = "https://api.themoviedb.org/3";
  const imageBaseUrl = "https://image.tmdb.org/t/p/original"
  const [movies, setmovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {

    const fetchData = async () => {
      const requestVideos = await axios.get(
        `${movieBaseUrl}${fetchUrl}`
      )
        .catch((err) => console.log(err))
      console.log(requestVideos.data.results);
      setmovies(requestVideos.data.results)
      //    return requestVideos;
    }
    fetchData();
  }, [fetchUrl]);
  const handleClick = (movie) => { //klik sidereg moview wused ena 
    if (trailerUrl) {//treler kale int adrgln eyalnew new
      setTrailerUrl("");// kale temelso endigeba drgln 
    }
    else { //kelele gn  movieTrailerlgabto url run yderglnal
      movieTrailer(movie?.title || movie.name || movie.original_name)
        .then((url) => { //ech emtmelsew arr naw     keza title run yadergal
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get("v"))
        })
        .catch((error) => console.log(error))

    }


    //    console.log(movies);

  }
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const slideLeft = () => {
    const slider = document.getElementById('slider' + ecorowID)
    slider.scrollLeft = slider.scrollLeft - 600;
  };
  const slideRight = () => {
 const slider = document.getElementById('slider' + ecorowID)
    slider.slideRightt = slider.slideRight + 600;
  };

  return (
    <div className='row'>

      <h1 id={id}>{title}</h1>
      <div className='group relative flex items-center'>
        <MdChevronLeft className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block text-block hidden hover:block' onClick={slideLeft} size={40} />   
        <div id={"slider" + ecorowID} className='row__posters relative whitespace-nowrap'>
          {movies?.map((movie) => {
            return (
              <img
                onClick={() => handleClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${imageBaseUrl}${movie.poster_path}`}
              />
            );
          })}

        </div>
        <MdChevronRight className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block text-block hidden hover:block' onClick={slideRight} size={40} />
   </div>
    
      <div style={{ padding: "10px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>

  );
}

export default Row