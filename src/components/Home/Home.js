import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../MovieDetails/MovieDetails.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [movieData, setMovieData] = useState([]);
    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMovieData(data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {movieData?.map((data, i) => <div
                key={i}
                className="movie_card" id="bright">
                <div className="info_section">
                    <div className="movie_header">
                        <img className="locandina" src={data?.show?.image?.medium} alt='main img' />
                        <h1>{data.show.name}</h1>
                        <h4>{data.show.schedule.time}, {data.show.schedule.days?.map(d => d)}</h4>
                        <span className="minutes">{data.show.premiered}</span>
                        <p className="type">{data.show.genres?.map(d => d + ", ")}</p>
                    </div>
                    <div className="movie_desc">
                        <p className="text">{data?.show?.summary?.length > 180 ? data?.show?.summary.slice(0, 200) + "...." : data?.show?.summary.slice(0, 180)} </p>

                        <div className="d-flex align-items-center justify-content-around">
                            <Link className='d-block' to={`/movieDetails/${data.show.id}`}><button className="btn btn-light mb-3">See Details</button></Link>
                            <a target="_blank" rel="noopener noreferrer" className='d-block' href={data.show.officialSite}><button className="btn btn-light mb-3">Official Site</button></a>
                        </div>
                    </div>
                </div>
                <div className="blur_back bright_back" style={{
                    backgroundImage: `url(${data?.show?.image?.original})`
                }}></div>
            </div>)}
        </div>
    );
};

export default Home;