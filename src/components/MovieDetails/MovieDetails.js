import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, ListGroup } from 'react-bootstrap';

import { Container } from 'react-bootstrap';
import MovieBookForm from '../MovieBookForm/MovieBookForm';

const MovieDetails = () => {
    const { id } = useParams()
    const [movieData, setMovieData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then(res => res.json())
            .then(data => {

                setMovieData(data.find(d => d.show.id.toString() === id));
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <Container className='my-5'>
            <Card className='mx-auto' style={{ maxWidth: '700px' }}>
                <Card.Header> <h1>Single Movie Details </h1></Card.Header>
                <Card.Img variant="top" style={{ height: '300px' }} src={movieData?.show?.image?.medium} />
                <ListGroup className="list-group-flush fw-bold">
                    <ListGroup.Item><h4>Movie Name: {movieData?.show?.name}</h4> </ListGroup.Item>
                    <ListGroup.Item>Language: {movieData?.show?.language}</ListGroup.Item>
                    <ListGroup.Item>Premiered: {movieData?.show?.premiered}</ListGroup.Item>
                    <ListGroup.Item>Status: {movieData?.show?.status}</ListGroup.Item>
                    <ListGroup.Item>Country: {movieData?.show?.network?.country?.name}</ListGroup.Item>
                    <ListGroup.Item>Timezone: {movieData?.show?.network?.country?.timezone}</ListGroup.Item>
                </ListGroup>

                <Card.Body>
                    <Card.Text>{movieData?.show?.summary} </Card.Text>
                    <Button variant='info' onClick={() => setModalShow(true)}>Booking Now</Button>
                    <a className='btn btn-danger ms-3' href={movieData?.show?.url} target="_blank" rel="noopener noreferrer" alt="">Movie Link</a>
                    <MovieBookForm show={modalShow} onHide={() => setModalShow(false)} movieName={movieData?.show?.name} />
                </Card.Body>
            </Card>

        </Container>
    );
};

export default MovieDetails;

