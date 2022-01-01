
import React,{useEffect} from 'react'

const Show4props = (props) => {
    const [count,setCount] = props.count
    const [clg,setClg] = props.college

    useEffect(() =>{
        console.log("i am from child component")
    },[])

    return (
        <div>
            <h1>increment calculator </h1>
            <button onClick={() => setCount(count+1)}>increment count val</button><br />
            {count}<br />
            <button onClick={() => setClg("Vidya jyothi institute of tech")}>change college name</button><br />
            {clg}
        </div>
    )
}

export default Show4props