import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import "./Movie.css";

const Movie = ({ item }) => {
    const [like, setLike] = useState(false);
    const saveShow = () => {
        setLike(!like);
    }

    return (
        <div className='movie-container w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img
                className='w-full h-[auto] block'
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
            />
            <p className='p-2 text-white truncate text-center text-sm md:text-md lg:text-lg'>{item?.title}</p>
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='hover:text-ellipsis white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                    {item?.title}
                </p>
                <p onClick={saveShow}>
                    {like ? (
                        <FaHeart className='absolute top-4 left-4 text-gray-300' />
                    ) : (
                        <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
                    )}
                </p>
            </div>
        </div>
    );
};

export default Movie;