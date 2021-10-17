import React from "react";
import UserService from "../services/UserService";
import { Table, Form, Button, Modal } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

class UserList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            users: [],
            sortByIDFlag: true,
            sortByEmailFlag: true,
            searchID: 0,
            fullUserArrSize: 0,
            alphabet: [
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
            ],
            showModal: false,
            usrToDelete: 0
        }

        this.loadUsers = this.loadUsers.bind(this)
        this.sortByID = this.sortByID.bind(this)
        this.searchByID = this.searchByID.bind(this)
        this.searchByEmail = this.searchByEmail.bind(this)
        this.sortByEmail = this.sortByEmail.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.changeModelShowStatus = this.changeShowModalState.bind(this)
    }

    componentDidMount() {
        this.loadUsers()
    }

    sortByID() {
        let arr = this.state.users

        console.log(`Before sorting ${JSON.stringify(arr)}`)

        if (this.state.sortByIDFlag) {
            arr = arr.sort((a, b) => b.id - a.id)
        } else {
            arr = arr.sort((a, b) => a.id - b.id)
        }
        this.setState({
            sortByIDFlag: !this.state.sortByIDFlag,
            users: arr
        })
    }

    changeShowModalState(id) {
        this.setState({
            showModal: !this.state.showModal,
            usrToDelete: id
        })
    }

    sortByEmail() {
        let arr = this.state.users

        if (this.state.sortByEmailFlag) {
            arr = arr.sort((a, b) => {
                let first = a.email.charAt(0).toLowerCase()
                let last = b.email.charAt(0).toLowerCase()

                return this.state.alphabet.indexOf(first) - this.state.alphabet.indexOf(last)
            })
        } else {
            arr = arr.sort((a, b) => {
                let first = a.email.charAt(0).toLowerCase()
                let last = b.email.charAt(0).toLowerCase()

                return this.state.alphabet.indexOf(last) - this.state.alphabet.indexOf(first)
            })
        }
        this.setState({
            sortByEmailFlag: !this.state.sortByEmailFlag,
            users: arr
        })
    }

    searchByID(event) {
        this.loadUsers().then(() => {
            this.setState({
                users: this.state.users.filter(u => u.id == event.target.value)
            })
        })

        if (event.target.value == 0) {
            console.log("Loading from zero");
            this.loadUsers()
        }
    }

    searchByEmail(e) {
        this.loadUsers().then(() => {
            this.setState({
                users: this.state.users.filter(u => u.email.includes(e.target.value))
            })
        })
        if (e.target.value == "") this.loadUsers()
    }

    async loadUsers() {
        return UserService.findAll().then(response => {
            this.setState({
                users: response.data,
                fullUserArrSize: response.data.length
            })
        })
    }

    deleteUser() {
        UserService.delete(this.state.usrToDelete)
            .then(() => {
                this.loadUsers()
                this.setState({ usrToDelete: 0, showModal: false })
            })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-7">
                    <h1>User List</h1>

                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>
                                    {this.state.sortByIDFlag
                                        ? (<i onClick={this.sortByID} className="bi bi-caret-down"></i>)
                                        : (<i onClick={this.sortByID} className="bi bi-caret-up"></i>)}
                                    ID
                                    <input type="number" min="0" max={this.state.fullUserArrSize} style={{ width: "50px" }} placeholder="Id" onChange={this.searchByID} />
                                </th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>
                                    {this.state.sortByEmailFlag
                                        ? (<i onClick={this.sortByEmail} className="bi bi-caret-down"></i>)
                                        : (<i onClick={this.sortByEmail} className="bi bi-caret-up"></i>)}
                                    ID
                                    Email
                                    <input type="text" style={{ width: "50px" }} placeholder="Email" onChange={this.searchByEmail} />
                                </th>
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
                                            <Button variant="danger" onClick={() => this.changeShowModalState(usr.id)}><i className="bi bi-trash"></i></Button>
                                        </Form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <Modal show={this.state.showModal} onHide={this.changeShowModalState}>
                        <Modal.Header>
                            <Modal.Title>Are you sure you want to delete?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>You're going to delete user with ID {this.state.usrToDelete}, are you sure?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={() => { this.setState({ showModal: false }) }}><i className="bi bi-x-lg"></i> No</Button>
                            <Button variant="success" onClick={this.deleteUser}><i className="bi bi-check"></i> Yes</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="col-md-1"></div>
            </div>
        )
    }
}

export default UserList