import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap'
import UserService from "../services/UserService";

class UserForm extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                firstname: '',
                lastname: '',
                email: ''
            }

            this.createUser = this.createUser.bind(this)
            this.updateUserFirstName = this.updateUserFirstName.bind(this);
            this.updateUserLastName = this.updateUserLastName.bind(this);
            this.updateUserEmail = this.updateUserEmail.bind(this);
        }

        createUser() {
            UserService.create({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email
            })
        }

        updateUserFirstName(e) {
            this.setState({
                firstname: e.target.value
            })
        }

        updateUserLastName(e) {
            this.setState({
                lastname: e.target.value
            })
        }

        updateUserEmail(e) {
            this.setState({
                email: e.target.value
            })
        }

        render() {
            return (
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4" style={{ marginTop: "2em", borderRadius: "3em", padding: "2em", boxShadow: "0px 0px 20px #bbb000" }}>
                        <h1>Adding a new user {this.props.username}</h1>

                        <Form>
                            <Form.Group>
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" value={this.state.firstname} placeholder="Enter username's first name" onChange={this.updateUserFirstName} />
                                <Form.Text className="text-muted">Registering username's first name</Form.Text>
                            </Form.Group>
                            {' '}
                            <Form.Group>
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" value={this.state.lastname} placeholder="Enter username's Last name" onChange={this.updateUserLastName} />
                                <Form.Text className="text-muted">Registering username's Last name</Form.Text>
                            </Form.Group>
                            {' '}
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={this.state.email} placeholder="Enter username's email" onChange={this.updateUserEmail} />
                                <Form.Text className="text-muted">Registering username's email</Form.Text>
                            </Form.Group>
                            {' '}
                            <Button type="button" variant="primary" onClick={this.createUser}><i className="bi bi-pencil-fill"></i> Create</Button>
                        </Form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            )
        }
    }

export default UserForm