import React from "react";
import './hom.css'
import Slideshow from "./slide";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import sea from './img/sea.jpg'
import pic from './img/pic1.jpg'



function Home(){
return(
<>

<div className="title">
<h>โรงพิมพ์มหาลัยศิลปากร{'\n'}</h>
<h>วิทยาลัยเขตพระราชวังสนามจันทร์</h>
</div>

<Slideshow/>

{/* <div className="show">
    <Slideer/>
</div> */}



<div className="title2">
<h>บริการ</h>
<h1>โรงพิมพ์มหาลัยศิลปากรวิทยาลัยเขตพระราชวังสนามจันทร์</h1>
</div>

<div className="product_list">
    <div className="firstrow">

        <div className="products1">
            <img src={sea}/>
            <p>หนังสือ</p>
        </div>

        <div className="products1">
        <img src={sea}/>
            <p>สมุดฉีก</p>
        </div>

        <div className="products1">
        <img src={pic}/>
            <p>โปสเตอร์</p>
        </div>

    </div>

    {/* Row 2 */}

    <div className="firstrow">

        <div className="products1">
        <img src={sea}/>
            <p>ใบปลิว</p>
        </div>

        <div className="products1">
        <img src={sea}/>
            <p>บรรจุภัณฑ์สิ้นค้า</p>
        </div>

        <div className="products1">
        <img src={sea}/>
            <p>สิ่งพิมพ์อื่นๆ</p>
        </div>

    </div>
    

</div>


</>
)
}

export default Home