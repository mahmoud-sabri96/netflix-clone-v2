
const API_KEY = "ebe379e2cb4ced2d9fd18fd34cf4aa50";
// f81980ff410e46f422d64ddf3a56dddd


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;

// https://api.themoviedb.org/3/genre/movie/list?api_key=ebe379e2cb4ced2d9fd18fd34cf4aa50&language=en-US
// https://api.themoviedb.org/3/movie/lists?api_key=ebe379e2cb4ced2d9fd18fd34cf4aa50&language=en-US&page=1
// https://api.themoviedb.org/3/discover/movie?api_key=ebe379e2cb4ced2d9fd18fd34cf4aa50&with_genres=28