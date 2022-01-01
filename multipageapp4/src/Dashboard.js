import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    let navigate = useNavigate()
    return (
        <div>
            <center>
                <h4>Displaying Dashboard</h4>
                <button onClick={()=> navigate('/contact')}>Contact</button>
            </center>
        </div>
    )
}

export default Dashboard
