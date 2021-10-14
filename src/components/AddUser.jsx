import React from "react";
import UserForm from "./UserForm";

const AddUser = () => {
    const handleOnSubmit = usr => {
        console.log(usr);
    }

    return (
        <React.Fragment>
            <UserForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    )
}

export default AddUser