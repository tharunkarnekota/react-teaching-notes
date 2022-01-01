import React,{useState } from 'react';


const App = () => {

  const [user,setUser] = useState("");

   const handlerr = e =>{
     setUser(e.target.value)
   }
 
  return (
    <div >
      <center>
        {/* <input type="text" placeholder="username" value={user} name="user" onChange={() => handlerr()}></input>  // error */}
        {/* <input type="text" placeholder="username" value={user} name="user" onChange={e => handlerr()}></input>   // error */}
        <input type="text" placeholder="username" value={user} name="user" onChange={e => handlerr(e)}></input> 
        {/* <input type="text" placeholder="username" value={user} name="user" onChange={handlerr}></input> */}
        <br></br>
        {user}
      </center>
    </div>
  )
}

export default App