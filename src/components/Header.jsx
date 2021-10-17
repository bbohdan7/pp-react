import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import Test from './TestComponent'

const Header = () => {
    return (
       <div className="jumbotron">
           <h1>Payment Processor System</h1>
           <Test username="John" />
       </div>
    )
}

export default Header