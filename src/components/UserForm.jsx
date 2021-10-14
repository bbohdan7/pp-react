import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'


class UserForm extends React.Component {
    /*constructor(props){
        super(props)
    }*/

    render(){
        return (
            <div>
                <h1>Adding a new user { this.props.username }</h1>
            </div>
        )
    }
}

UserForm.defaultProps = {
    username: "default"
}

export default UserForm