import React,{useState } from 'react';


const App = () => {
  const [age,setAge] = useState(19)

  const changeHandler = () =>{
    if(age===19){
      setAge(20)
    }
    else{
      setAge(19)
    }
  }
  return (
    <div >
      <center>
        <p>my name is kalyan with {age} years</p>
        {/* <button onClick={changeHandler}>Click me for increment</button>   //no error */}
        <button onClick={() => changeHandler()}>Click me for inc2</button>
      </center>
    </div>
  )
}

export default App