import React, { useState } from "react";
import _ from "lodash";
import { sendEmail } from "../../helpers/emailService";
import {
  EmailValidator,
  PhoneValidator,
  QuestionValidator,
} from "./ContactUsValidator";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetError();

    if (validateForm()) {
      await throttledSendEmail();
      alert("Your question has been sent! Thank you!");
      resetForm();
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (!EmailValidator(email)) {
      isValid = false;
      setEmailError(true);
    }
    if (!PhoneValidator(phone)) {
      isValid = false;
      setPhoneError(true);
    }

    if (!QuestionValidator(question)) {
      isValid = false;
      setQuestionError(true);
    }

    return isValid;
  };

  const callSendEmail = async () => {
    await sendEmail(email, phone, question);
  };

  const throttledSendEmail = _.throttle(callSendEmail, 2000);

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
