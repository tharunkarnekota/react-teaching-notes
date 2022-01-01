import React,{useState} from 'react';


const App = () => {

  const [user,setUser] = useState("");

   
  return (
    <div >
      <center>
        <input type="text" onChange={e=> console.log(e.target.value)}></input>
      </center>
    </div>
  )
}

export default App