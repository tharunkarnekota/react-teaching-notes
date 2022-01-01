import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';                             // npm i react-router-dom
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/dashboard' exact element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App