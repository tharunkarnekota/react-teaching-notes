import React, { useState } from 'react'
import Show4props from './Show4props'


const App = () => {
  const [count,setcount] = useState(0)
  const [clg,setClg] = useState("vjit")
  return (
    <div>
      <h1>hello world!!!</h1>
      <Show4props count={[count,setcount]} college={[clg,setClg]}/>
    </div>
  )
}

export default App
