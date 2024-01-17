import React from "react";
import './Foo.css'
import ig from '../imgs/logo2.png'

function Footer(){
    return(
    <>
    
<div className="Bigbox">
<div className="first_box">
        <h1>โรงพิมพ์มหาลัยศิลปากร</h1>
        
        <img src={ig} className="Foot_logo"/> 
    </div>
    
    <div className="second_box">
        <h1>เวลาทำการ</h1>
        <p>จันทร์-ศุกร์ 8:30 - 16:30 น.</p>
        <p>หยุดวันเสาร์-อาทิตย์และวันหยุดราชการ</p>
    </div>

    <div className="third_box">
        <h1>ติดต่อเรา</h1>
        <p>example@gmail.com</p>
        <p>093-333-3333</p>
        <p>Line : @example</p>
    </div>
</div>
   



    </>
    )
}

export default Footer