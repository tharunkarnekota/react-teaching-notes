import React,{useState } from 'react';


const App = () => {
  const [age,setAge] = useState("nine")

  return (
    <div >
      <center>
        <p>my name is kalyan with {age} years</p>
        {/* <button onClick={()=> setAge(age+1)}>Click me for increment</button>             //error */}
        <button onClick={()=> setAge("Twenty")}>Click me for increment</button>
      </center>
    </div>
  )
}

export default App