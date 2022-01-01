import React,{useState} from 'react';


const App = () => {

  const [user,setUser] = useState("");

  const [x,setX] = useState(5)
  const changeHandler = e =>{
    setUser(e.target.value);
    
  }

  return (
    <div >
      <center>
        {x === 4 ? 
        <input type="text" placeholder="username" value={user} name="user" onChange={ changeHandler }></input>
        :
        <input type="text" placeholder="username"  ></input> }
        <br></br>
        {user}
      </center>
    </div>
  )
}

export default App
