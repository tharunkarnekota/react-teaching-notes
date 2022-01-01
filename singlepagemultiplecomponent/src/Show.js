import React, { useEffect, useState } from 'react'

const Show = () => {

    const [count,setCount] = useState(0)

    useEffect(() =>{
        console.log("i am from child component")
    },[])

    return (
        <div>
            <h1>increment calculator </h1>
            <button onClick={() => setCount(count+1)}>increment</button><br />
            {count}
        </div>
    )
}

export default Show
