import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from "react-hook-form";

const MovieBookForm = ({ show, onHide, movieName }) => {

    const { register, handleSubmit, reset } = useForm();
    const [userData, setUserData] = useState({})

    const onSubmit = data => {
        setUserData({ ...data, movieName: movieName })
        alert("Movie booking success")
        reset()
        onHide()
    };
    useEffect(() => {
        if (userData.email) {
            for (let data in userData) {
                sessionStorage.setItem(data, userData[data]);
            }
            setUserData({})
        }
    }, [userData]);
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton >
                <Modal.Title id="contained-modal-title-vcenter">
                    Book Movie
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>Name</Form.Label>
                            <Form.Control {...register("fullName")} type="text" placeholder="Full Name" required />
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>Phone</Form.Label>
                            <Form.Control {...register("phone")} type="number" placeholder="Phone" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control {...register("email")} placeholder="Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Address</Form.Label>
                        <Form.Control {...register("address")} placeholder="Address" required />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Country</Form.Label>
                        <Form.Control {...register("country")} type='text' placeholder="Country" required />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>City</Form.Label>
                            <Form.Control {...register("city")} type='text' placeholder='City' required />
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>Zip</Form.Label>
                            <Form.Control {...register("zip")} type='text' placeholder='Zip' required />
                        </Form.Group>
                    </Row>

                    <Button variant="info" className='w-100' type="submit">Book </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='danger px-5' onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MovieBookForm;