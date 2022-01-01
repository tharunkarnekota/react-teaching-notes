import React,{useState} from 'react'
import { Navigate } from 'react-router-dom';

const About = () => {
    const [data,setData] = useState(false);
    if(data){
        return <Navigate to='/' />
    }
    return (
        <div>
            <center>
                <h4>Displaying About Page</h4>
                <button onClick={()=> setData(true)}>Home</button>
            </center>
        </div>
    )
}

export default About
