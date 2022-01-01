import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>i am from home page</h1>
            <Link to="/dashboard" >Login</Link>
        </div>
    )
}

export default Home
