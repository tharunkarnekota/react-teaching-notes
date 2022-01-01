import React,{useState} from 'react'
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
    const [data,setData] = useState(false);
    if(data){
        return <Navigate to='/about' />
    }
    return (
        <div>
            <center>
                <h4>Displaying Dashboard</h4>
                <button onClick={()=> setData(true)}>About</button>
            </center>
        </div>
    )
}

export default Dashboard
