import React,{useState } from 'react';


const App = () => {
  const [status,setStatus] = useState("file safe")

  const [x,setX] = useState(3)
  const changeHandler = () =>{
    if(x===3){
      setX(4)
    }
    else{
      setX(3)
    }
  }

  const deletehandler = () =>{

    // axios.delete("https:localhost//5000/deletefiles")
    
    setStatus("File deleted")
  }
  return (
    <div >
      <center>
        <p>my  {status} </p>
        {/* <button onClick={changeHandler}>Click me for increment</button> */}
        <button onClick={() => changeHandler()}>Delete</button>

        {x === 4 ? 
        <div>
            <button onClick={() => deletehandler()}>Yes</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => changeHandler()}>No</button>
        </div>
        :
        null}
      </center>
    </div>
  )
}

export default App