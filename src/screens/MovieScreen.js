// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../features/Nav';
import "./MovieScreen.css"

function MovieScreen() {
    const Base_url = `https://api.themoviedb.org/3/`;
    const Api_key = `api_key=ebe379e2cb4ced2d9fd18fd34cf4aa50`;
    const base_image_url = "https://image.tmdb.org/t/p/original/";
    let { type, ID } = useParams();
    const [movie, setMovie] = useState({});


    // console.log(type)
    // console.log(ID)
    // console.log(`${Base_url}${type}/${ID}?${Api_key}&language=en-US`)

    // const url = "https://api.themoviedb.org/3/movie/436270?api_key=ebe379e2cb4ced2d9fd18fd34cf4aa50&language=en-US"
    // this function check the type of media (tv or movie)the type is the part of url we want to fetch data from it
    function checkType() {
        if (type === "tv" || type === "movie") {
            return type
        } else {
            type = "movie";
            return type;
        }
    }
    checkType();

    // console.log(type)
    // console.log(`${Base_url}${type}/${ID}?${Api_key}&language=en-US`)



    useEffect(() => {
        async function fetchData() {
            // const request = await axios.get(`${Base_url}${movieID}?${Api_key}`);
            const request = await fetch(`${Base_url}${type}/${ID}?${Api_key}&language=en-US`);
            const data = await request.json()
            // console.log(data);
            setMovie(data);
            // setMovieGenres(request.data.genres)
        }
        fetchData();
    }, [Base_url, type, ID, Api_key])

    // console.log(movie)
    // console.log(movie.genres?.map((e) => e["name"]));
    //########### return Jsx Code
    return (
        <>
            <Nav />
            <div className='movieScreen'>
                <img src={`${base_image_url}${movie.poster_path ? movie.poster_path : movie.backdrop_path}`} alt="ex" />
                <div className='movieScreen__detalis'>
                    <h2>{movie.original_name || movie.name || movie?.title}</h2>
                    {movie.genres?.map(
                        (e) => (<span className='movieScreen__genres' key={e["id"]}>{e["name"]}</span>)
                    )}
                    <p className='movieScreen__lang'>Original-Language :- <span>{movie.original_language}</span></p>
                    <p className='movieScreen__vote'>Vote :- <span>{movie.vote_average}</span></p>
                    <p className='movieScreen__voteCount'>Vote Count :- <span>{movie.vote_count}</span></p>
                    <p className='movieScreen__popularity'>Popularity :- <span>{movie.popularity}</span></p>
                    <p className='movieScreen__release'>Release data :- <span>{movie.first_air_date}</span></p>
                    <p className='movieScreen__overview'>Overview :- <br /><span>{movie.overview}</span></p>
                </div>
            </div >
        </>
    )
}

export default MovieScreen
