import React from 'react'
import "./css/App.css"
import MovieCard from './MovieCard';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { useParams } from "react-router-dom";


export default function Main() {
    
    const { type } = useParams();

    const api_url = `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=7b2941d346f0db132e96feb135b4e8ff`;
    const api_search = "https://api.themoviedb.org/3/search/movie?api_key=7b2941d346f0db132e96feb135b4e8ff&query="

    const [movies, setMovies] = useState([]);
    const [term, setTerm] = useState('');



    // GET
    const getMovies = async () => {
        const response = await fetch(api_url);
        const responseJson = await response.json();
        if (responseJson.results) {
            setMovies(responseJson.results)
        }
    };
    useEffect(() => {
        getMovies();
    }, []);

    // get by category
    useEffect(() => {
        getMovies()
    }, [type])


    // get by search
    const handleSearch = (e) => {
        e.preventDefault(); // not refresh the website after clicking the button
        fetch(api_search + term)
            .then(res => res.json())
            .then(data => setMovies(data.results))
    };

    return (
        <div className="App">
            <div className="navbar">

                <Navbar bg="rgb(50, 50, 103)" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/movies/popular">Popular</Nav.Link>
                                <Nav.Link href="/movies/top_rated">Top Rated</Nav.Link>
                                <Nav.Link href="/movies/upcoming">Upcoming</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="search_nav">
                    <div className='search_box'>
                        <form onSubmit={handleSearch}>
                            <input onChange={(e) => setTerm(e.target.value)} />
                            <button> Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="movies">
                {movies.map((movie, index) =>
                    <div key={index}> <MovieCard{...movie} /></div>
                )}
            </div>
        </div>
    )
}
