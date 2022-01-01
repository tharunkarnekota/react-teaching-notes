import React,{useState} from 'react'
import { Navigate } from 'react-router-dom';

const Home = () => {

    const [data,setData] = useState(false);
    if(data){
        return <Navigate to='/dashboard' />
    }
    return (
        <div>
            <center>
                <h4>Welcome to Home page!!</h4>
                <button onClick={()=> setData(true)}>Login</button>
            </center>
            
        </div>
    )
}

export default Home

