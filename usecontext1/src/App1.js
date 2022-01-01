import React,{createContext,useState} from 'react'
import ComponentX from './ComponentX'
import ComponentY from './ComponentY'
import ComponentZ from './ComponentZ';

export const store = createContext();  //////

const App = () => {
  const [data,setData] = useState("tharun");
  
  return (
    <div>
      <h1>Hello World!!</h1>
{/* 
      <ComponentX value={[data,setData]}/>
      <ComponentY value={[data,setData]}/>
      <ComponentZ value={[data,setData]}/> */}
      
      <store.Provider value={[data,setData]} >   
        <center>
          <ComponentX />
          <ComponentY />
          <ComponentZ />
        </center>
      </store.Provider>
    </div>
  )
}

export default App
