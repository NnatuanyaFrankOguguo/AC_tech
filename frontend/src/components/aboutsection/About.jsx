import React, { useState, useEffect, useRef } from "react"
import "./About.css";
import leftarrow from "../herosection/left.png";
import rightarrow from "../herosection/right.png";
import sliderData from "../../images/hero-Image/Slider";

const About = () => {

  
  const [current, setCurrent] = useState(0);
  const timeout = useRef(null);

  //creating a function for the lazy loading of images

  const lazyLoad = () => {
    const images = document.querySelectorAll(`img[data-src]`); // Find images with data-src
    
    images.forEach((img) => {
      const source = img.getAttribute("data-src"); ; // Get the high-quality image URL
      if(source) {
        img.src = source // Replace placeholder with the actual image
        img.onload = () => img.removeAttribute("data-src"); // Clean up after load
      }
    })
    
   
  };

  useEffect(() => {
    lazyLoad(); // Call the function when the component mounts and when it updates
    
    // lazy load when on slider changes
    const observer = new MutationObserver(lazyLoad);
    const target = document.querySelector('.about-img')
    if(target) {
      observer.observe(target, {childList: true});
    };

    return () => {
      if(observer) observer.disconnect();
    };

  }, [current])
  

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => (current === sliderData.length - 1 ? 0 : current + 1))
    }

    timeout.current = setInterval(nextSlide, 7000)

    return function () {
      if(timeout.current){
        clearTimeout(timeout.current)
      }
    }


  }, [current, sliderData.length])

  const nextSlide = () => {
    if(timeout.current){
      clearTimeout(timeout.current)
    }
    setCurrent(current === sliderData.length - 1 ? 0 : current + 1);
  };

  const backSlide = () => {
    if(timeout.current){
      clearTimeout(timeout.current)
    }
    setCurrent(current === 0 ? sliderData.length - 1 : current - 1);
  };

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }



  return (
    <div className="about maincontainer" id="about">
      <div className="about-left">
        <div className="about-img">
          {sliderData.map((slide, index) => {
            return (
              <div key={index}>
                {index === current && (
                  <div className="about-img">
                    <div className="slide-img">
                      <img
                        src={slide.image_small}
                        data-src={slide.image}
                        className="image"
                        alt={slide.alt}
                        loading="lazy"
                      />
                    </div>
                    <div className="slide-text">
                      <h3 className="title">{slide.title}</h3>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <div className="slider-btn">
            <img
              className="shift-icons"
              onClick={backSlide}
              src={leftarrow}
              alt="leftarrow"
              loading='lazy'
            />
            <img
              className="shift-icons"
              onClick={nextSlide}
              src={rightarrow}
              alt="rightarrow"
              loading='lazy'
            />
          </div>
        </div>
      </div>

      <div className="about-right">
        <h1>ABOUT US</h1>
        <h3>Our Commitment to You</h3>


        <div>
          <p>Founded in 2005, S A Dairo Cooling & Electrical Services began as a small family-owned business with a simple mission: to provide reliable, high-quality AC services to our community. What started in a small garage has now grown into a trusted local enterprise with a team of certified professionals.</p>
          <br></br>
          <p>We believe in transparency, integrity, and customer satisfaction. Every technician is carefully trained, background-checked, and committed to delivering exceptional service that exceeds your expectations.</p>
        </div>

      </div>
    </div>
  );
};

export default About;
