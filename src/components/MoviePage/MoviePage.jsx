import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCover from './MovieCover/MovieCover';
import MovieDetails from './MovieDetails/MovieDetails';
import MovieTrailerYT from './MovieTrailerYT/MovieTrailerYT';
import './MoviePage.css'
import Recommended from './Recommended/Recommended';

export default function MoviePage() {
    const [movie, setMovie] = useState();
    const location = useLocation();
    
    useEffect(() => {
        setMovie(location.state);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },[location.state])

  return (
      <main className='moviepage'>
          <MovieCover movie={movie} />
          <MovieDetails movie={movie} />
          <MovieTrailerYT movie={movie} />
          <Recommended movie={movie} />
      </main>
  )
}
