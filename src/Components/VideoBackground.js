import React, { useState } from 'react'
import { API_OPTIONS } from '../Utils/constants'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../Utils/movieSlice';

const VideoBackground = ({ movieId }) => {
    // const trailerVideo = useSelector(store => store.movies.trailerVideo);
    // const dispatch = useDispatch();
    const [trailerId, setTrailerId] = useState(null);

    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/533535/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        const filteredTrailer = json.results.filter((video) => video.type === "Trailer");

        const trailer = filteredTrailer.length ? filteredTrailer[0] : json.results[0];
        // dispatch(addTrailerVideo(trailer))
        setTrailerId(trailer.key)
        // console.log(trailer);

    }

    useEffect(() => {
        getMovieVideos();
    }, []);
    return (
        <div className=''>
            <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/" + trailerId + "?si=yEpsoKKZAr5Rglu3&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    )
}

export default VideoBackground