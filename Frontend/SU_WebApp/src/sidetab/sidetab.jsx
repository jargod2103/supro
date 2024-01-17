import React from "react";
import ig from '../imgs/ig.png'
import x from '../imgs/x.png'
import fb from '../imgs/fb.png'
import './side.css'

function Sidetab(){
    return(<>
    
<div className="sidetab">
  <div className="tab">
    <a href="https://www.instagram.com/"><img src={ig} alt="Instagram"/></a>
    <a href="https://twitter.com/"><img src={x} alt="X"/></a>
    <a href="https://web.facebook.com/"><img src={fb} alt="Facebook"/></a>
  </div>
</div>


    
    </>)
}

export default Sidetab