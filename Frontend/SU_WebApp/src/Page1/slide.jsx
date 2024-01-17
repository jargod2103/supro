import React, { useState, useEffect } from 'react';
import './sli.css'; // Import your CSS file for styling
import sea2 from './img/sea2.jpg';
import sea from './img/sea.jpg';
import sea3 from './img/sea3.jpg';

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const showSlides = () => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex > slides.length) {
        newIndex = 1;
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[newIndex - 1].style.display = "block";
      dots[newIndex - 1].className += " active";
      return newIndex;
    });
  };

  useEffect(() => {
    let slideIndex = 0;
    showSlides();

    const slideshowInterval = setInterval(showSlides, 2000);

    return () => clearInterval(slideshowInterval);
  }, []);

  return (
    <div>
      <div className="slideshow-container">
        {/* Your slides go here */}
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src={sea2} style={{ width: '100%', height: '700px', objectFit: 'cover' }} alt="Sea 1" />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src={sea} style={{ width: '100%', height: '700px', objectFit: 'cover' }} alt="Sea 2" />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={sea3} style={{ width: '100%', height: '700px', objectFit: 'cover' }} alt="Sea 3" />
          <div className="text">Caption Three</div>
        </div>
      </div>

      <br />

      <div style={{ textAlign: 'center' }}>
        {/* Your dots go here */}
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Slideshow;
