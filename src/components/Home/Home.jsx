import React from 'react'
import MovieRow from './MovieRow/MovieRow'
import requests from '../../api/requests'
import Banner from './Banner/Banner'


export default function Home() {
    return (
        <main className='Home'>
            <Banner />
            <MovieRow title={'Trending Movies'} fetchUrl={requests.fetchTrending} isLarge />
            <MovieRow title={'NetFlix Originals'} fetchUrl={requests.fetchNetflixOriginals} isLarge />
            <MovieRow title={'Prime Videos'} fetchUrl={requests.fetchPrimeVideos} isLarge />
            <MovieRow title={'Disney Plus'} fetchUrl={requests.fetchDisneyPlus} isLarge />
            <MovieRow title={'Action Movies'} fetchUrl={requests.fetchActionMovies} />
            <MovieRow title={'Horror Movies'} fetchUrl={requests.fetchHorrorMovies} />
            <MovieRow title={'Romance Movies'} fetchUrl={requests.fetchRomanceMovies} />
            <MovieRow title={'Comedy Movies'} fetchUrl={requests.fetchComedyMovies} />
        </main>
  )
}
