import React from 'react'
import MovieRow from './MovieRow/MovieRow'
import requests from '../../api/requests'
import Banner from './Banner/Banner'
import TMDBID from '../../constants/tmdbid';

export default function Home() {
    const movieRowDataList = [
        {
            title: 'Trending Movies',
            fetchUrl: requests.fetchTrending,
            isLarge: true
        },
        {
            title: 'NetFlix Originals',
            fetchUrl: requests.fetchMovieByNetWork(TMDBID.NETWORK.NETFLIXID),
            isLarge: true
        },
        {
            title: 'Prime Videos',
            fetchUrl: requests.fetchMovieByNetWork(TMDBID.NETWORK.PRIMEVIDEOID),
            isLarge: true
        },
        {
            title: 'Disney Plus',
            fetchUrl: requests.fetchMovieByNetWork(TMDBID.NETWORK.DISNEYPLUSID),
            isLarge: true
        },
        {
            title: 'Action Movies',
            fetchUrl: requests.fetchMovieByGenres(TMDBID.GENRE.ACTION),
            isLarge: false
        },
        {
            title: 'Horror Movies',
            fetchUrl: requests.fetchMovieByGenres(TMDBID.GENRE.HORROR),
            isLarge: false
        },
        {
            title: 'Romance Movies',
            fetchUrl: requests.fetchMovieByGenres(TMDBID.GENRE.ROMANCE),
            isLarge: false
        },
        {
            title: 'Comedy Movies',
            fetchUrl: requests.fetchMovieByGenres(TMDBID.GENRE.COMEDY),
            isLarge: false
        },
        
    ]
    return (
        <main className='Home'>
            <Banner />
            {
                movieRowDataList.map(movieRowData => (
                    <MovieRow
                        title={movieRowData.title}
                        fetchUrl={movieRowData.fetchUrl}
                        isLarge={movieRowData.isLarge}
                        key={movieRowData.title}
                    />
                ))
            }
        </main>
  )
}
