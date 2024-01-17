import React from "react";
import Navbar from "../Navbar/Narbar";
import Footer from "../Footer/Footer";
import './cont.css'
import qr from './qr_ex.png'
import Sidetab from "../sidetab/sidetab";

function Contact(){
return(
<>
<Navbar />
<Sidetab/>
<div className="Contract_title">
    <h style={{fontSize:"40px"}}>ติดต่อโรงพิมพ์มหาลัยศิลปากรวิทยาลัยเขตพระราชวังสนามจันทร์</h>
</div>

<div className="Contract_info">

    <div className="Social">
       <p>โรงพิมพ์มหาลัยศิลปากรวิทยาลัยเขตพระราชวังสนามจันทร์</p>
       <p>ที่อยู่ จ.กรุงเทพ เขต อโศก 28888</p>
       <p>เบอร์โทรติดต่อ Tel. 062 221 2561</p>
       <img src={qr} />
       <h style={{ fontSize: "30px",fontWeight:"700"}}>QR LINE</h>
    </div>

    <div className="MapAndNews">
        <div className="Map">
            <img src="https://scontent.fbkk30-1.fna.fbcdn.net/v/t31.18172-8/259416_10151339162831253_751814097_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=c2f564&_nc_ohc=bsp86vS1O-YAX8yCKWK&_nc_ht=scontent.fbkk30-1.fna&oh=00_AfDwqZjUarA3dv8BfPcx2f6ozOaLPZEYITLof-D0_U2VUA&oe=65CB6BAB"/>
        </div>
        <div className="News">
           <div className="News2">
            <h1>ข่าวสารโรงพิมพ์</h1>
            <p style={{fontSize:"18px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, voluptatem? Amet quaerat similique commodi facilis, exercitationem voluptatibus! Quo molestias ipsam iste error esse animi aliquid ducimus, quas eos? Voluptatum, dolorem?</p>
           </div>
        </div>
    </div>

</div>




<Footer/>
</>
)
}


export default Contact