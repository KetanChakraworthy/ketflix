import React from 'react'
import './MovieDetails.css'

export default function MovieDetails({ movie }) {
    return (
        <div className='moviedetails'>
            <h1 className='moviedetails__title' >{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className='moviedetails_description'>{movie?.overview}</div>
            <div className='moviedetails__simple-details'>
                <div className="moviedetails__rating">{`${movie?.vote_average}/10`}</div>
                {movie?.adult && <div className='moviedetails__adult moviedetails__tags'>Adult</div>}
                <div className='moviedetails__original-language moviedetails__tags'>
                    {`Original Language: ${movie?.original_language.toUpperCase()}`}
                </div>
                <div className="moviedetails__release-date moviedetails__tags">{`Release Date: ${movie?.release_date || movie?.first_air_date}`}</div>
            </div>
        </div>
    )
}
