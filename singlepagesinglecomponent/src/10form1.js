import React,{useState} from 'react';


const App = () => {

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const submitHandler = e =>{
    e.preventDefault();
    // axois.post("https:'localhost:5000/login",username,password)
    console.log(username,password);
  }
  
  return (
    <div >
      <center>
        <form onSubmit={submitHandler}>
          <input type="text"     name="username"  value={username}  onChange={e => setUsername(e.target.value)}  placeholder="username" /> <br/>
          <input type="password" name="password"  value={password}  onChange={e => setPassword(e.target.value)}  placeholder="password" /> <br/>
          <input type="submit" name="submit"/>
        </form>
      </center>
    </div>
  )
}

export default App