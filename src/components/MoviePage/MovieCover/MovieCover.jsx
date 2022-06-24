import React from 'react'
import './MovieCover.css'

export default function MovieCover({ movie }) {
    const baseUrl = 'http://image.tmdb.org/t/p/original';
    return (
        <header
              className='moviepage__cover'
              style={{
                  backgroundSize: 'cover',
                  backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`
              }}
        >
            <div className='moviepage__fadeBottom'></div>
          </header>
  )
}
