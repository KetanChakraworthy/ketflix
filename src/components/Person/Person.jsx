import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './Person.css';
import { useNavigate } from 'react-router';


export default function Person() {
    
    const [person, setPerson] = useState([]);
    const location = useLocation();
    const baseUrl = 'http://image.tmdb.org/t/p/original';
    const navigate = useNavigate();

    useEffect(() => {
        setPerson(location.state);
    }, [location.state]);
    const handleClick = (movie) => {
        movie.profile_path
            ? navigate(`/person/${movie?.id}`, { state: movie })
            : navigate(`/${movie?.media_type ? movie?.media_type : 'show'}/${movie?.id}`, { state: movie })
        
    }   
    return (
        <main className='person'>
            <header className="person__profileDetails">
                <div className="person__profileImageWrapper">
                    <img
                        className='person__profile'
                        src={`${baseUrl}${ person?.profile_path }`}
                        alt={ person?.name }
                    />
                </div>
                <div className="person__profileDetail">
                    <h1 className="person__name">{person?.name}</h1>
                    <h3>{ `Department : ${person?.known_for_department}` }</h3>
                    <h4>{`Gender : ${person?.gender === 1 ? 'Female' : (person?.gender === 2 ? 'Male' : 'Other')}`}</h4>
                    <h4>{ `Popularity : ${person?.popularity}` }</h4>
                </div>
            </header>
            <h2 style={{paddingLeft:'2rem'}}>Know For</h2>
            <div className="person__knowFor">
                { person?.known_for ?
                    person?.known_for.map(movie => (
                        <div className="person__imageWrapper"  key={movie?.id}>
                            <img
                                className='person__result'
                                src={`${baseUrl}${ movie?.poster_path || movie?.profile_path }`}
                                alt={movie?.title || movie?.name || movie?.original_name }
                                onClick={() => handleClick(movie)}
                            />
                            <h4 style={{textAlign:'center', maxWidth:'15rem'}}>{ movie?.title || movie?.name || movie?.original_name }</h4>
                        </div>
                    ))
                    : <h2 style={{textAlign:'center'}}> Stay tuned...</h2>
                }
            </div>
        </main>
  )
}
