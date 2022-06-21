const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchPrimeVideos:`/discover/tv?api_key=${API_KEY}&with_networks=1024`,
    fetchDisneyPlus:`/discover/tv?api_key=${API_KEY}&with_networks=2739`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`

}; 

export default requests;