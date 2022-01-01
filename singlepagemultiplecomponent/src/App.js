import React, { useState } from 'react'
import Show3props from './Show3props'


const App = () => {
  const [count,setcount] = useState(0)
  const [clg,setClg] = useState("Tharun")
  return (
    <div>
      <h1>hello world!!!</h1>
      <Show3props count={count} college={clg}/>
    </div>
  )
}

export default App
