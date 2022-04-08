const API_KEY = "f8bfaa456289484fa621c5a0b2695f73"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movies/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key= ${API_KEY}&with_genres=99`,
}

export default requests;
// https://api.themoviedb.org/3/discover/movie?api_key=f8bfaa456289484fa621c5a0b2695f73&with_genres=99

// https://api.themoviedb.org/3/discover/movie?api_key=f8bfaa456289484fa621c5a0b2695f73&with_genres=99

// https://api.themoviedb.org/3/movies/top_rated?api_key=f8bfaa456289484fa621c5a0b2695f73language=en-US
