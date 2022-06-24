import React, { useEffect, useState } from 'react'
import movieTrailer from 'movie-trailer';
import Youtube from 'react-youtube';


export default function MovieTrailerYT({ movie }) {

    const [trailerUrl, setTrailerUrl] = useState('');
    const movieTitle = movie?.title || movie?.name || movie?.original_title;
    useEffect(() => {
        movieTrailer( movieTitle || '')
            .then(url => {
                if (!url) throw new Error('API does not return Trailer Link');
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch(error => console.log(error));
    }, [movieTitle]);


    const opts = {
        height: "480",
        width: "100%",
        playerVars: {
            autoplay: 0,
        },
    };
  return (
      <div>
          <h1 style={{ marginLeft: '1rem' }}>Trailer</h1>
          {
              trailerUrl
              ? <Youtube videoId={trailerUrl} opts={opts} key={movie?.id} />
              : <h2 style={{ textAlign: 'center', width: '100%' }}>Stay tuned...</h2>
          }
    </div>
  )
}
