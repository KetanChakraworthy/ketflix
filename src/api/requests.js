const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
    // Home
    fetchTrending:`/trending/all/week?api_key=${API_KEY}`,
    //New
    fetchMovieByNetWork: (networkId) => (`/discover/tv?api_key=${API_KEY}&with_networks=${networkId}`),
    fetchMovieByGenres: (genreId) => (`/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`),
}; 

export default requests;