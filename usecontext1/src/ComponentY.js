import React,{useContext} from 'react'
import { store } from './App'

const ComponentY = () => {
    const [data,setData] = useContext(store)
  
    return (
        <div>
            componentY {data} <br />
            <button onClick={() => setData("Kalyan")}>Change</button>
        </div>
    )
}

export default ComponentY
