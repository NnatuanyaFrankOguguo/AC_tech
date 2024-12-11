import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import phone from "../../images/hero-Image/phone.png";
import location from "../../images/hero-Image/location.png";
import mail from "../../images/hero-Image/mail.png";
import email from "../../images/hero-Image/email.png";

// af98ad15-ffae-43e3-b125-e4668e3b2650

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "af98ad15-ffae-43e3-b125-e4668e3b2650");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <>
      <div className="title">
        <p>Contact Us</p>
        <h3>Get in Touch</h3>
      </div>
      <div className="contact" id="con">
        {/*we will create two columns in the left column we will display the text and some contact information
    and in the right column we will display one contact form where user can submit the name, phone number and message 
    and that message will be sent to admin email ID */}

        <div className="contactCol" id="contact">
          <h4>
            Send us a Message <img src={mail} alt="email-icon" />
          </h4>
          <p>
            Feel Free to reach out through our contact form or find our contact
            information below. your feedback, question, and suggestions are
            important to us as we strive to provide exceptional service to our
            hospitality community.
          </p>
          <ul>
            <li>
              <img src={email} alt="email-icon" />
              Contact@codeblooded.dev
            </li>
            <li>
              <img src={phone} alt="phone-icon" />
              +234 (0) 70700 18654
            </li>
            <li>
              <img src={location} alt="loaction-icon" />
              No.7 fifth Avenue, Independent Layout <br /> MA 02139, Canada
            </li>
          </ul>
        </div>
        <div className="contactCol">
          <form
            // action="https://formsubmit.co/nnatuanyafrank@gmail.com"
            // method="POST"
            onSubmit={onSubmit}
          >
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Fullname" required />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Mobilenumber"
              required
            />
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
          <span>{result}</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
