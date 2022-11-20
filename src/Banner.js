
import React, { useEffect, useState } from 'react'
import axios from "axios";
import requests from './requests';
import "./Banner.css"



const Banner = () => {
    const movieBaseUrl = "https://api.themoviedb.org/3";
    const imageBaseUrl = "https://image.tmdb.org/t/p/original";
    const [movie, setmovie] = useState({});
    useEffect(()=>{
 const fetchData=async()=>{
   const requestVideos = await axios.get(
     `${movieBaseUrl}${requests.fetchNetflixOriginals}`
   )
   .catch((err)=>console.log(err))
 
   setmovie(()=> requestVideos?.data.results[
            Math.floor(Math.random()*requestVideos.data.results.length)
        ]
)

 }  
 fetchData();
    },[])
    console.log(movie)
    function truncateString(str, num) {
      return str?.length > num ? str.substring(0, num) + "..." : str;
    }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url(${imageBaseUrl}${movie?.backdrop_path})`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h3 className="banner__description">
          {truncateString(movie?.overview, 150)}
        </h3>
      </div>
      <div className='banner_fadeBotton'/>
    </div>
  );
}


export default Banner