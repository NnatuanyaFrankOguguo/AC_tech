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

    timeout.current = setInterval(nextSlide, 5000)

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
        <h1>ABOUT OGRAL</h1>
        <h3>Our Commitment to You</h3>
        <p>
        Welcome to Ogral, where we bring your real estate dreams to life. With a commitment to excellence and a passion for innovation, we have built a reputation as a trusted name in the real estate industry, helping clients find not just properties, but homes that suit their unique needs and aspirations.
        </p>

        <div>
          <button className="intro-btn">Learn more...</button>
        </div>
      </div>
    </div>
  );
};

export default About;
