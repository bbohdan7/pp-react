import React, { useState, useEffect } from "react";
import { Button, Card } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import UserService from '../services/UserService'

const ShowUser = (props) => {

    const [usr, setUsr] = useState({})
    const history = useHistory()

    useEffect(() => {
        UserService.find(props.match.params.id)
            .then(response => setUsr(response.data))
            .then(() => console.log(`Your user is fetched ${JSON.stringify(usr)}`))
    }, [])

    return (
        <div className="row">
            <div className="col-md-4">
                <Button onClick={history.goBack} variant="primary">Back</Button>
            </div>
            <div className="col-md-4">
                <Card style={{ width: "18rem" }}>
                    <Card.Body>
                        <Card.Title>User ID {props.match.params.id}</Card.Title>

                        <Card.Text>
                            First name: { usr.firstname }<br/>
                            Last name: {usr.lastname}<br/>
                            Email: {usr.email}<br/>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
            <div className="col-md-4"></div>
        </div>
    )
}

export default ShowUser