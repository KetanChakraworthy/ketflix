const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
    // Treanding
    fetchTrending:`/trending/all/week?api_key=${API_KEY}`,
    // Fetch
    fetchMovieByNetWork: (networkId) => (`/discover/tv?api_key=${API_KEY}&with_networks=${networkId}`),
    fetchMovieByGenres: (genreId) => (`/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`),
    // Search
    searchByType: (type,query) => (`/search/${type}?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${query}`)
}; 

export default requests;