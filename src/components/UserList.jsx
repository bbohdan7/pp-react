import React from "react";
import UserService from "../services/UserService";
import { Table, Form, Button } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

class UserList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }

        this.loadUsers = this.loadUsers.bind(this)
    }

    componentDidMount() {
        this.loadUsers()
    }

    loadUsers() {
        UserService.findAll().then(response => {
            this.setState({
                users: response.data
            })
        })
            .then(() => console.log(JSON.stringify(this.state.users)))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-7">
                    <h1>User List</h1>

                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map(usr => (
                                <tr key={usr.id}>
                                    <td>{usr.id}</td>
                                    <td>{usr.firstname}</td>
                                    <td>{usr.lastname}</td>
                                    <td>{usr.email}</td>
                                    <td>
                                        <Form>
                                            <Button variant="warning"><i className="bi bi-wrench"></i></Button>{' '}
                                            <Button variant="info"><i className="bi bi-eye"></i></Button>{' '}
                                            <Button variant="danger"><i className="bi bi-trash"></i></Button>
                                        </Form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                <div className="col-md-1"></div>
            </div>
        )
    }
}

export default UserList