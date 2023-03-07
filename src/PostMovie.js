import React from "react";
import "./css/PostMovie.css";
import "./css/App.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function PostMovie() {

    const api_post = "https://api.themoviedb.org/3/movie/{movie_id}/rating?api_key=<<7b2941d346f0db132e96feb135b4e8ff>>";

   
    return (

        <>
            <div className="App">
                <div>
                    <Navbar bg="rgb(50, 50, 103)" variant="dark" expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/post">Add Movie</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>


            </div>
        </>

    )
}



