import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const [age,setAge] = useState(5)
    const [name,setname] = useState("Tharun")
    let navigate = useNavigate()
    return (
        <div>
            <center>
                <h4>Displaying About Page</h4>
                <button onClick={()=> navigate(`/contact?name=${name}&age=${age}`)}>Contact</button>
            </center>
        </div>
    )
}

export default About
