import React,{useEffect} from 'react'

const Show2props = (props) => {

    useEffect(() =>{
        console.log("i am from child component")
    },[])

    return (
        <div>
            <h1>increment calculator </h1>
            {props.count+102}
        </div>
    )
}

export default Show2props
       


