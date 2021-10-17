import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Test = (props) => {
    const [ usr, setUsr ] = useState("dga")

    let someAction = () => {
        console.log("Doing some action!")
        setUsr("Set By SomeAction")
    }

    return (
        <div>
            Your username-prop is {props.username} and usr-state is {usr}

            <Button onClick={someAction}>Click to action</Button>
        </div> 
    )
}

export default Test

