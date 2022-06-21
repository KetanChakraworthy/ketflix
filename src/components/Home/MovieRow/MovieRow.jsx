import React, { useEffect, useState } from 'react';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import axios from '../../../api/index';

// CSS
import './MovieRow.css'

export default function MovieRow({ title, fetchUrl, isLarge }) {
    const [movies, setmovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const baseUrl = 'http://image.tmdb.org/t/p/w185';

    useEffect(() => {
        async function fetchData() {
            const { data: { results } } = await axios.get(fetchUrl);
            setmovies(results);
            return results
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
          },
    }
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name || '')
                .then(url => {
                    if (!url) throw new Error('API does not return Trailer Link');
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch(error => console.log(error));
        }
    }

  return (
    <div className='movierow' >
          <h1>{title}</h1>
          <div className="movierow__posters">
              {
                  movies.map(movie => {
                      return <img
                          className={`movierow__poster ${isLarge ? 'movierow__posterLarge' : '' }`}
                          key={movie?.id}
                          src={`${baseUrl}${isLarge ? movie?.poster_path : movie?.backdrop_path }`}
                          alt={movie?.title || movie?.name || movie?.original_name}
                          onClick={() => handleClick(movie)}
                      />  
                  })
              }
          </div>
          {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}
