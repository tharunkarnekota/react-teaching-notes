import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [count,setCount] = useState(0)
    const [clgid,setClgid] = useState("VJIT")
    let navigate = useNavigate()
    return (
        <div>
            <center>
                <h4>Displaying Dashboard</h4>
                <button onClick={()=> navigate(`/contact/${count}/${clgid}`)}>Contact</button>
            </center>
        </div>
    )
}

export default Dashboard
