import React, { useEffect } from "react";
import { Button, Form, Alert } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { useState } from 'react'
import UserService from "../services/UserService";

const EditUser = (props) => {

    let [firstname, setFirstname] = useState("")
    let [lastname, setLastname] = useState("")
    let [email, setEmail] = useState("")
    let [updated, setUpdated] = useState(false)

    let onFirstnameChange = (e) => setFirstname(e.target.value)
    let onLastnameChange = (e) => setLastname(e.target.value)
    let onEmailChange = (e) => setEmail(e.target.value)

    let updateUser = () => {
        let usr = {
            firstname: firstname,
            lastname: lastname,
            email: email
        }
        UserService.update(props.match.params.id, usr).then(() => setUpdated(true))
    }

    let history = useHistory()

    useEffect(() => {
        UserService.find(props.match.params.id)
            .then(response => {
                setFirstname(response.data.firstname)
                setLastname(response.data.lastname)
                setEmail(response.data.email)
            })
            .then(() => console.log("User fetched"))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="row">
            <div className="col-md-4">
                <Button onClick={history.goBack}><i className="bi bi-arrow-left"></i> Back</Button>
            </div>
            <div className="col-md-4">

                <Alert show={updated} variant="secondary">
                    <Alert.Heading>User has been updated!</Alert.Heading>
                    <p>Your users has been successfully updated!</p>
                    <hr />
                    <div className="d-flex d-flex justify-content-end">
                        <Button onClick={history.goBack} variant="primary"><i className="bi bi-arrow-left" /> Go Back</Button>
                        <Button onClick={() => setUpdated(false)} variant="danger"><i className="bi bi-x-lg" /> Close</Button>
                    </div>
                </Alert>

                <h1>Editing user {props.match.params.id}</h1>

                <Form>
                    <Form.Group>
                        <Form.Label>Enter new First name</Form.Label>
                        <Form.Control type="text" value={firstname} onChange={onFirstnameChange} /><hr />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter new Last name</Form.Label>
                        <Form.Control type="text" value={lastname} onChange={onLastnameChange} /><hr />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter new email</Form.Label>
                        <Form.Control type="email" value={email} onChange={onEmailChange} /><hr />
                    </Form.Group>
                    <Button variant="success" onClick={updateUser}>Update</Button>
                </Form>
            </div>
            <div className="col-md-4"></div>
        </div>
    )
}

export default EditUser