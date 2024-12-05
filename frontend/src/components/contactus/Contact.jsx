import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact' id="con">
      {/*we will create two columns in the left column we will display the text and some contact information
    and in the right column we will display one contact form where user can submit the name, phone number and message 
    and that message will be sent to admin email ID */}
      <div className='contactCol'>
        <h4>
          Send us a Message <img src={mail} alt="" />
        </h4>
        <p>
          Feel Free to reach out through our contact form or find our contact
          information below. your feedback, question, and suggestions are
          important to us as we strive to provide exceptional service to our
          hospitality community.
        </p>
        <ul>
          <li>
            <img src={email} alt="" />
            Contact@codeblooded.dev
          </li>
          <li>
            <img src={phone} alt="" />
            +234 (0) 70700 18654
          </li>
          <li>
            <img src={location} alt="" />
            No.7 fifth Avenue, Independent Layout <br /> MA 02139, Canada
          </li>
        </ul>
      </div>
      <div className='contactCol'>
        <form
          action="https://formsubmit.co/nnatuanyafrank@gmail.com"
          method="POST"
        >
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Fullname" required />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Mobilenumber" required />
          <label>Write Your Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Submit now{" "}
            <FontAwesomeIcon style={{ color: "white" }} icon={faArrowRight} />
          </button>
        </form>
        <span></span>
      </div>
    </div>
  );
};

export default Contact;
