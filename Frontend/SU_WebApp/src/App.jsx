import { useState } from 'react'
import Navbar from './Navbar/Narbar'
import Home from './Page1/home'
import './Appp.css'
import ig from './imgs/ig.png'
import x from './imgs/x.png'
import fb from './imgs/fb.png'
import Footer from './Footer/Footer'
import Sidetab from './sidetab/sidetab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Sidetab/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App
