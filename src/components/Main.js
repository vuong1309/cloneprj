import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests.js'
import Trailer from './Trailer.js';

const Main = () => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests).then((response) => {
            setMovies(response.data)
        })
    }, [])

    const truncateString = (str, num) => {
        return str?.length > num ? str.slice(0, num) + '...' : str
    }

    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                <img className='w-full h-full object-cover'
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title} />
                <div className='absolute w-full top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <div className='my-4 flex'>
                        <button className='border bg-gray-300 text-white border-gray-300 py-2 px-5 transition duration-500 hover:bg-red-600'>Watch</button>
                        {/* <button className='border text-white border-gray-300 py-2 px-5 ml-4 transition duration-500 hover:bg-gray-600'>Movie Trailer</button> */}
                        <Trailer movie={movie} />
                    </div>
                    <p className='text-gray-300 text-sm italic'>Release date: {movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] text-gray-300'>{truncateString(movie?.overview, 150)}</p>
                </div>
            </div>

        </div>
    );
};

export default Main;