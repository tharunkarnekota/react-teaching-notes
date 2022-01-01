import React from 'react';
import {useLocation} from "react-router-dom";

const Contact2 = () => {

    const search = useLocation().search;
    const name = new URLSearchParams(search).get('name');
    const age = new URLSearchParams(search).get('age');
    
    return (
        <div>
            <h1>simple contact page</h1>
            <h2>my name is {name}</h2>
            <h2>My age is {age}</h2>
        </div>
    )
}

export default Contact2
