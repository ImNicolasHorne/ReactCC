import {Link } from 'react-router-dom'
import React from "react"

function Nav(){
    return(
        <nav>
            <Link to = "/">Home</Link>
            <Link to="/users/ronaldo">Ronaldo</Link>
            <Link to="/users/messi">Messi</Link>
            <Link to = "/usesrs/nclshorne">Niccy H</Link>
        </nav>
    )
}

export default Nav