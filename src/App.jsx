// import { useState } from 'react'
import { Routes, Route, } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Content from './Components/Content';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className='overflow-x-hidden'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default App;
