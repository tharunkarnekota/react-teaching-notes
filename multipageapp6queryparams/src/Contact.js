import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
    const {count,collegeid} = useParams()
    return (
        <div>
            <h1>This is contact page</h1>
            <h2>Count value is {count}</h2>
            <h2>college name is {collegeid}</h2>
        </div>
    )
}

export default Contact
