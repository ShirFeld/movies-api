import React from 'react';
import "./css/MovieCard.css";

export default function MovieCard(props) {

    const api_img = "https://image.tmdb.org/t/p/w500/";

    return (
        <div className='card'>
            <div className='poster'>
                <img src={props.poster_path ? api_img + props.poster_path : "https://cdn.pixabay.com/photo/2018/03/18/14/09/lens-3236923_960_720.jpg"} />
            </div>


            <div className='info'>
                <p className='title'>{props.title}</p>
                <p className='vote'>{props.vote_average}</p>
            </div>

            <div className='overview'>
                <h2 className='title_overview'> Over view</h2>
                <h3 className='overview_info'>{props.overview}</h3>
            </div>
        </div>
    )
}
