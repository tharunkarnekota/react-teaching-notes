import React, { useState } from 'react'
import Show2props from './Show2props'


const App = () => {
  const [count,setcount] = useState(0)
  return (
    <div>
      <h1>hello world!!!</h1>
      <Show2props count={count}/>
    </div>
  )
}

export default App
