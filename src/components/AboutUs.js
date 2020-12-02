import React from 'react'
const Config = require('../config.json') 

const AboutUs = ()=>{



    return (

        <div id="aboutUs" className ="aboutUs">

            <h1 className="section-title">ABOUT US</h1>
            <div className = "aboutus-container">

                <div className = "text-container">
                    <p className = "aboutus-text"> Auckland Kendo Club isn’t just a martial arts dojo. Since 1988, our founding members have formed a tight-knit family that upholds unique values, such as:</p>

                    <p className = "aboutus-text"> • Resilience </p>
                    <p className = "aboutus-text"> • Togetherness</p>
                    <p className = "aboutus-text"> • Continuous Improvement </p>
                    <p className = "aboutus-text"> • Humility</p>

                    <p className = "aboutus-text"> Regardless of race, age, gender or class, all of our members strive to improve themselves in both training and life. We ensure that each member receives genuine encouragement and support to realize their potential – without any egos getting in the way. </p>

                    <p className = "aboutus-text"> In addition to personal development, kendo offers many opportunities. Auckland Kendo Club members have competed in national and international tournaments, trained under world-class sensei and formed lifelong friendships. These eye-opening experiences are truly remarkable. </p>

                    <p className = "aboutus-text"> If you’re looking for a new challenge with other growth-minded people, then head down to Auckland Kendo Club now! It’s just a matter of intent.</p>


                </div>

                <div className ="image-container">
                    <img className="aboutusimage" src={`${process.env.PUBLIC_URL}/images/aboutusimage.jpg`} alt="aboutimage" />
                    <a href={Config.membership} ><button className="aboutus-btn">TAKE ACTION!</button></a>
                </div>
                
            </div>


        </div>


    )

} 

export default AboutUs 