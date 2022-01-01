import React,{useContext} from 'react'
import { store } from './App'

const ComponentZ = () => {
    const [data,setData] = useContext(store)
    return (
        <div>
            componentZ {data}
        </div>
    )
}

export default ComponentZ
