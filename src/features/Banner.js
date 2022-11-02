import axios from './Axios';
import React, { useEffect, useState } from 'react';
import "./Banner.css";

import requests from './Requests';


function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            //######### request.data => is response of request after fetching
            // console.log(request.data)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)])
            // return request;
        }

        fetchData()
    }, [])
    // console.log(movie)




    // ##### this function make the discription String of film up to specific number 
    function truncate(string, n) {
        // if (string.length > n) {
        //     return string.substr(0, n) + "..."
        // } else {
        //     return string
        // }
        // ==>>> Course Syntax
        return string?.length > n ? string.substr(0, n) + "..." : string;
    }





    // ##################### JSX Code ################
    return (
        <header className='banner' style={{
            // backgroundImage: `url("https://i.imgur.com/e1hLQ2m.png")`
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            // backgroundColor: "#111",https://img.freepik.
            backgroundSize: "cover",
            backgroundPosition: "center center"
        }}>


            <div className='banner__contents'>

                <h1 className='banner__title'>
                   {truncate(movie?.name || movie?.title || movie?.original_name ,30) }
                   {/* {movie?.name || movie?.title || movie?.original_name } */}
                </h1>

                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>

                <h1 className='banner__description'>
                    {
                        truncate(movie.overview, 150)
                    }

                </h1>
            </div>

            <div className='banner--fadeBottom' />

        </header >
    )
}

export default Banner;