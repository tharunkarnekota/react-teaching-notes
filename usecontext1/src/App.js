import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./Home"
import Dashboard from './Dashboard'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
