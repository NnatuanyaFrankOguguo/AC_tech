import React from 'react'
import './Service.css'

const Service = () => {
  return (
    <div id='service'>
        <div className='title'>
            <p>Our Services</p>
            <h3>What We Offer</h3>
        </div>

        <div className='service-content'>

            <h2>Our Service Process</h2>
            <div class="step">
                <p class="number">1</p>
                <h3>Contact & Diagnosis</h3>
                <p>Call or book online, we assess your AC issue</p>
            </div>

            <div class="step">
                <p class="number">2</p>
                <h3>Expert Solution</h3>
                <p>Precise repair or installation plan</p>
            </div>

            <div class="step">
                <p class="number">3</p>
                <h3>Quality Service</h3>
                <p>Professional, efficient AC solution</p>
            </div>

        </div>




    </div>
  )
}

export default Service