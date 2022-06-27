import React from 'react'
import { useNavigate } from 'react-router';
import './SearchResults.css'

export default function SearchResults({ searchTerm, type, searchResults, loading }) {
    const baseUrl = 'http://image.tmdb.org/t/p/w185';
    const navigate = useNavigate();

    const handleClick = (movie) => {
        movie.profile_path
            ? navigate(`/person/${movie?.id}`, { state: movie })
            : navigate(`/${movie?.media_type ? movie?.media_type : 'show'}/${movie?.id}`, { state: movie })
        
    }
    return (
        < div className='search__results' >
                {
                    searchResults.length > 0 &&
                        <>
                    <h3 style={{ textAlign: 'center' }} >{`Search for: ${searchTerm}`}</h3>
                    <h4 style={{ textAlign: 'center' }}>{`Type: ${type.toUpperCase()}`}</h4>
                        </>
            }
            { !loading ?
            < div className="search__resultsList" >
                {
                    searchResults.map(movie => (
                        <div className="search__imageWrapper" key={movie?.id}>
                            <img
                                className='search__result'
                                src={`${baseUrl}${movie?.poster_path || movie?.profile_path}`}
                                alt={movie?.title || movie?.name || movie?.original_name}
                                onClick={() => handleClick(movie)}
                            />
                            <h4 style={{ textAlign: 'center', maxWidth: '15rem' }}>{movie?.title || movie?.name || movie?.original_name}</h4>
                        </div>
                    ))
                }
            </div >
                : <h1 style={{textAlign:'center'}}>Loading...</h1>
            }
        </div >
    )
}
