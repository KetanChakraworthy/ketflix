import React from 'react'
import MovieRow from '../../Home/MovieRow/MovieRow'
import requests from '../../../api/requests'

export default function Recommended({ movie }) {
  return (
      <div className='recommended'>
          <h1 style={{marginLeft:'1rem'}}>You Might Like</h1>
          {
              movie?.genre_ids.map(genre => (
                  <MovieRow title='' fetchUrl={requests.fetchMovieByGenres(genre)} isLarge={false} key={genre} />
              )).slice(0,2)
          }
    </div>
  )
}
