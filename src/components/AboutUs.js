import React from 'react'

const AboutUs = ()=>{



    return (

        <div id="aboutUs" className ="aboutUs">

            <h1 className="section-title">ABOUT US</h1>
            <div className = "aboutus-container">

                <div className = "text-container">
                    <p className = "aboutus-text"> The true strength of the Auckland Kendo Club is its members </p>

                    <p className = "aboutus-text">From its core founding members of over 20 years, to the very newest trainees, the people are the reason our club contains an unbreakable bond</p>

                    <p className = "aboutus-text">The Auckland Kendo Club “family of members” all share a common goal regardless of nationality, to improve themselves both in training and in life. Each member enjoys the energy and encouragement recieved by training with other members at our Dojo. No ego’s, just genuine support and competitive spirit from your fellow “Kendo-ka (fellow practitioners)”</p>

                    <p className = "aboutus-text">Not only in training, our members enjoy socializing together at planned events and casual outings. In training and social events many have formed strong life long friendships through the “Magic” of Kendo</p>

                </div>

                <div className ="image-container">
                <img className="aboutusimage" src={`${process.env.PUBLIC_URL}/images/aboutusimage.jpg`} alt="aboutimage" />



                </div>
            </div>


        </div>


    )

} 

export default AboutUs 