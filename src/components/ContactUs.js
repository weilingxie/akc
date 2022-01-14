import React, { useState } from "react";
import _ from "lodash";
import * as emailjs from "emailjs-com";
const Config = require("../config.json");

//rfce + enter
const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [question, setQuestion] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [questionError, setQuestionError] = useState(false);

  const resetForm = () => {
    setEmail("");
    setPhone("");
    setQuestion("");
  };

  const resetError = () => {
    setEmailError(false);
    setPhoneError(false);
    setQuestionError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetError();

    validate();

    if (!emailError && !phoneError && !questionError) {
      throttledSendEmail();
    }
  };

  const validate = () => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4,5})$/;

    setEmailError(!emailRegex.test(email));
    setPhoneError(!phoneRegex.test(phone));
    setQuestionError(!question);
  };

  const sendEmail = () => {
    const templateParams = {
      from_name: email,
      to_name: Config.email,
      subject: `Question from email=> ${email}, and phone=> ${phone} from AKC website`,
      message: question,
      phone: phone,
    };
    emailjs
      .send(
        Config["email-service"],
        Config["email-template"],
        templateParams,
        Config["email-userId"]
      )
      .then(() => {
        resetForm();
        alert("Your question has been sent! Thank you!");
      });
  };

  const throttledSendEmail = _.throttle(sendEmail, 2000);

  return (
    <div id="contactUs" className="contactUs">
      <form className="contactUs-container">
        <h1 className="section-title">CONTACT US</h1>
        <div className="contactUs-form">
          <label htmlFor="contactUs-email">EMAIL</label>
          <input
            id="contactUs-email"
            value={email}
            type="email"
            placeholder="XXX@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <p className="contactUs-error">Please provide valid email</p>
          )}
        </div>
        <div className="contactUs-form">
          <label htmlFor="contactUs-phone">PHONE</label>
          <input
            id="contactUs-phone"
            value={phone}
            placeholder="XXX-XXX-XXXXX"
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
          />
          {phoneError && (
            <p className="contactUs-error">Please provide valid phone number</p>
          )}
        </div>
        <div className="contactUs-form">
          <label htmlFor="contactUs-question">QUESTION</label>
          <textarea
            id="contactUs-question"
            className="contactUs-question"
            value={question}
            name="contactUs-question"
            rows="4"
            cols="50"
            onChange={(e) => setQuestion(e.target.value)}
          />
          {questionError && (
            <p className="contactUs-error">Please provide your question</p>
          )}
        </div>
        <button onClick={handleSubmit}>SEND</button>
      </form>
    </div>
  );
};

export default ContactUs;
