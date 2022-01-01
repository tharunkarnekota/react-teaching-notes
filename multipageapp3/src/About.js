import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
    let navigate = useNavigate()
    return (
        <div>
            <center>
                <h4>Displaying About Page</h4>
                <button onClick={()=> navigate('/')}>Home</button>
            </center>
        </div>
    )
}

export default About
