import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  // const [status, setStatus] = useState("Submit")
  // const handleSubmit = async (e) => {
  //     e.preventDefault()
  //     setStatus("Sending...")
  //     const {firstname, lastname, email, message} = e.target.elements;
  //     let details = {
  //         firstname: firstname.value,
  //         lastname: lastname.value,
  //         email: email.value,
  //         message: message.value,
  //     }
  //     let response = await fetch
  //     }

  return (
    <div className="contact-page">
      <div className="contact-greeting">
        <p>
          Thank you for taking the time to look through my website.
          <br />
          If you are interested in contacting me please fill out the form below!
          I look forward to hearing from you.
        </p>
      </div>
      <form className="contact-form">
        {/* <label className="first-name">First Name</label> */}
        <input
          className="contact-input"
          //   onChange={handleChange}
          name="First Name"
          type="text"
          placeholder="First Name*"
          //   value={formValues.firstname}
          required
        />
      </form>
      <form className="contact-form">
        <input
          className="contact-input"
          name="Last Name"
          type="text"
          placeholder="Last Name*"
          required
        />
      </form>
      <form className="contact-form">
        <input
          className="contact-input"
          name="Email Address"
          type="email"
          placeholder="Email Address*"
          required
        />
      </form>
      <form className="contact-form">
        <input
          className="contact-input"
          name="Subject"
          type="text"
          placeholder="Subject*"
          required
        />
      </form>
      <form className="contact-form">
        <input
          className="contact-input"
          name="Message"
          type="text"
          placeholder="Message*"
          required
        />
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
