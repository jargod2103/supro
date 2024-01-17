import React from "react";
import './Nab.css'
import {createBrowserRouter,RouterProvider,Route,Link} from 'react-router-dom'


function Navbar() {
return (
<>

<nav className="Navbar">
    <div className="logo">
        <h1>โรงพิมพ์มหาลัยศิลปากร</h1>
        <p>วิทยาลัยเขตพระราชวังสนามจันทร์</p>
    </div>

    <div className="navigator">
   <ul className="ul">
    <li><Link to="/">หน้าแรก</Link></li>
    <li><Link to="/offer">ใบเสนอราคา</Link></li>
    <li><Link to="/contact">ติดต่อ</Link></li>
   </ul>
    </div>
</nav>

</>
    )
}

export default Navbar
