import React, { useEffect, useState } from 'react';
import axios from '../../../api/index';
import requests from '../../../api/requests';
import './Banner.css'

export default function Banner() {
    const [movie, setMovie] = useState({});
    const baseUrl = 'http://image.tmdb.org/t/p/original';

    useEffect(() => {
        async function fetchData() {
            const { data: { results } } = await axios.get(requests.fetchTrending);
            setMovie(results[
                Math.floor(Math.random() * (results.length - 1))
            ]);
        }
        fetchData();
    }, []);
    //Truncate

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }
    
  return (
      <header
          className='banner'
          style={{
              backgroundSize: 'cover',
              backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`
          }}
      >
          <div className="banner__contents">
              <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
              <div className="banner__buttons">
                  <button className="banner__button">Play</button>
                  <button className="banner__button">My List</button>
              </div>
              <h1 className="banner__description">{truncate(movie.overview, 150)}</h1>
          </div>
          <div className='banner__fadeBottom'></div>
      </header>
  )
}
