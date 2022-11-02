import axios from './Axios';
import React, { useEffect, useState } from 'react';

import "./Row.css";
import { useNavigate } from 'react-router-dom';



function Row({ title, fetchUrl, isLargeRow = false }) {

    const base_url = "https://image.tmdb.org/t/p/original/"
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results);
        }

        fetchData()
    }, [fetchUrl])

    // console.log(movies)

    function nextHandeler(e) {
        document.querySelector(`div[target-sec = "${e.target.id}"]`).scrollBy({
            top: 0,
            left: +100,
            behavior: 'smooth'
        });
    }

    function backHandeler(e) {
        document.querySelector(`div[target-sec = "${e.target.id}"]`).scrollBy({
            top: 0,
            left: -100,
            behavior: 'smooth'
        });
    }
    // console.log(fetchUrl.slice(0, fetchUrl.indexOf("?"))) //return    discover/tv
    const path = fetchUrl.slice(fetchUrl.lastIndexOf("/"), fetchUrl.indexOf("?"))  // return ("/tv" or "/movie")
    // console.log(path)
    // console.log(movie.media_type)

    function goToMovieHandler(MovieID, movieMediaType) {
        // console.log(MovieID)
        navigate(`${movieMediaType ? `${movieMediaType}` : `${path}`}/${MovieID}`)
    }

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n) + "..." : string;
    }



    //########### return Jsx Code
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters' target-sec={title}>
                <span onClick={(e) => backHandeler(e)} id={title} className="backBtn" ></span>
                <span onClick={(e) => nextHandeler(e)} id={title} className="nextBtn" ></span>

                {movies.map(
                    (movie) =>
                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) &&
                        (
                            <div className='img__box'>
                                <img
                                    // onClick={() => goToMovieHandler(`${path}/${movie.id}?`)}
                                    onClick={() => goToMovieHandler(movie.id, movie.media_type)}
                                    key={movie.id}
                                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                    //  src={`${base_url}${isLargeRow && movie.poster_path || !isLargeRow && !movie.backdrop_path ? movie.poster_path : movie.backdrop_path}`}
                                    alt={movie.name}
                                />

                                <h4> {truncate(movie?.original_title || movie?.name || movie?.title, 10)}</h4>
                            </div>
                        ))}
            </div>
        </div >
    )
}

export default Row