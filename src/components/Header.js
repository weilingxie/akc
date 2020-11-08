import React from 'react'
const Config = require('../config.json') 


//rfce + enter
const Header = () => {
    
    return (        
        <header id="header" className="header">           
            <div className="header-container">
                <section>
                    <div className="header-item header-address">
                        <i className="fas fa-map-marked fa-2x" ></i>
                        <p className="header-address-text" >{Config.address}</p>
                    </div>
                </section>
                <section>
                    <div className="header-item header-email">
                        <i className="fas fa-envelope fa-2x"></i>
                        <p className="header-email-text" >{Config.email}</p>
                    </div>
                    <div className="header-item header-phone">
                        <i className="fas fa-phone-square fa-2x"></i>
                        <p className="header-phone-text" >{Config.phone}</p>
                    </div>
                    <div className="header-item header-social-media">
                        <a href={Config.facebook}><i className="fab fa-facebook-square fa-2x"></i></a>
                        <a href={Config.youtube}><i className="fab fa-youtube fa-2x"></i></a>
                    </div>    
                </section>
            </div>                                 
        </header>         
    )
}

export default Header
