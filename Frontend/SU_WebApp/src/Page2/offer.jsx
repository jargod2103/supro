import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './off.css';
import Navbar from '../Navbar/Narbar';
import Footer from '../Footer/Footer';
import Sidetab from '../sidetab/sidetab';

function Offer() {
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [ema, setema] = useState('');
  const [tel, settel] = useState('');
  const [details, setdetails] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (Firstname === null || Lastname === null || ema === null || tel === null || details === null ||
      Firstname === "" || Lastname === "" || ema === "" || tel === "" || details === "") {
    return alert("Please fill in all information");
  }
  

    emailjs
      .sendForm('service_s5zan6h', 'template_zq9lf5r', form.current, 'Y6MOK5lG7VgQqz9Jd')
      .then(
        (result) => {
          console.log(result.text);
          alert("Infomation is aleardy sended")
        },
        (error) => {
          console.log(error.text);
        }
      );

      form.current.reset();

  };

  return (
    <>
      <Navbar />
      <Sidetab/>
      <form className="form" ref={form} onSubmit={sendEmail}>
        
        <div className="title3"><p1>ใบเสนอราคา</p1></div>
        
        <div className="first_Row">
          <div className="inputform">
            <span>First Name *</span>
            <br />
            <input type="text" name="first_name" onChange={(e) => setFirstname(e.target.value)} />
          </div>

          <div className="inputform">
            <span>Last Name *</span>
            <br />
            <input type="text" name="last_name" onChange={(e) => setLastname(e.target.value)} />
          </div>
        </div>

        <div className="first_Row">
          <div className="inputform">
            <span>Email *</span>
            <br />
            <input type="text" name="email_user" onChange={(e) => setema(e.target.value)} />
          </div>

          <div className="inputform">
            <span>Tel *</span>
            <br />
            <input type="text" name="telephone_number" onChange={(e) => settel(e.target.value)} />
          </div>
        </div>

        <div className="details">
          <span>รายละเอียด *</span>
          <br />
          <textarea rows="5" cols="50" name="message" onChange={(e) => setdetails(e.target.value)}></textarea>
        </div>

        {/* Uncomment the following lines to add a submit button */}
        <input type="submit" value="ยืนยันการส่งข้อมูล" className="Button" />
      </form>

      <Footer />
    </>
  );
}

export default Offer;
