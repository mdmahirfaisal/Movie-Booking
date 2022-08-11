import React, { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';

const BookedShow = () => {
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        setUserInfo({
            movieName: sessionStorage.getItem("movieName"),
            fullName: sessionStorage.getItem("fullName"),
            phone: sessionStorage.getItem("phone"),
            email: sessionStorage.getItem("email"),
            country: sessionStorage.getItem("country"),
            city: sessionStorage.getItem("city"),
            address: sessionStorage.getItem("address"),
            zip: sessionStorage.getItem("zip"),
        })
    }, [])
    return (
        <Container>
            <Card className=" mt-5">
                <Card.Body>
                    <h5>Movie Name:---{userInfo.movieName}</h5>
                    <h5>User Name:---{userInfo?.fullName}</h5>
                    <h5>User Email:---{userInfo?.email}</h5>
                    <h5>User Phone:---{userInfo?.phone}</h5>
                    <h5>Country:---{userInfo?.country}</h5>
                    <h5>City:---{userInfo?.city}</h5>
                    <h5>Zip:---{userInfo?.zip}</h5>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default BookedShow;