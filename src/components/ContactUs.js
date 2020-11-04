import React, { useState } from 'react'
import * as emailjs from 'emailjs-com'
const Config = require('../config.json') 

//rfce + enter
const ContactUs = () => {      
    const [email, setEmail ] = useState('');
    const [phone, setPhone ] = useState('');
    const [question, setQuestion] = useState('');

    const resetForm = () =>{
        setEmail('');
        setPhone('');
        setQuestion('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(phone);
        console.log(question);

        let templateParams = {
            from_name: email,
            // to_name: Config.email,
            to_name: 'sqlnever@gmail.com',
            subject: `Question from email=> ${email}, and phone=> ${phone} from AKC website`,
            message_html: question,
            phone: phone
        }

        emailjs.send(
            'service_vjfzxpu',
            'template_k2z82s2',
             templateParams,
            'user_78YHbcMIVImhwDzUfep0O'
           ).then(()=> {
                resetForm();
                alert('Your question has been sent! Thank you!');
           });                                
    };    

    return (        
        <div id="contactUs" className="contactUs">
            <form className="contactUs-container">
                <h1 className="contactUs-title">CONTACT US</h1>
                <div className="contactUs-form">
                    <label htmlFor="contactUs-email">EMAIL</label>
                    <input id="contactUs-email" value={email} type="email" onChange={e=>setEmail(e.target.value)} />
                </div>
                <div className="contactUs-form">
                    <label htmlFor="contactUs-phone">PHONE</label>
                    <input id="contactUs-phone" value={phone} type="tel" onChange={e=>setPhone(e.target.value)} />
                </div>
                <div className="contactUs-form">
                    <label htmlFor="contactUs-question">QUESTION</label>
                    <textarea id="contactUs-question" className="contactUs-question" value={question} name="contactUs-question" rows="4" cols="50" onChange={e=>setQuestion(e.target.value)} />                    
                </div>
                <button onClick={e => handleSubmit(e)}>SEND</button>
            </form>
        </div>  
    )
}

export default ContactUs
