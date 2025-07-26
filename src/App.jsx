import { useState } from 'react'
import {Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App;
