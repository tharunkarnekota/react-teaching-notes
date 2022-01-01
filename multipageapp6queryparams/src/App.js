import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';                             // npm i react-router-dom
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import Contact from './Contact';
import Header from './Header';
import Contact2 from './Contact2';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/dashboard' exact element={<Dashboard />} />
          <Route path='/contact/:count/:collegeid' exact element={<Contact />} />
          <Route path='/contact' exact element={<Contact2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App