import React from 'react'
const Config = require('../config.json') 


//rfce + enter
const Header = () => {
    
    return (        
        <div className="header">
            <div className="header-address">
                <i className="fas fa-map-marked"></i>
                <p className="header-address-text">{Config.address}</p>
            </div>
            <div className="header-right">
                <div className="header-email">
                    <i className="fas fa-envelope"></i>
                    <p className="header-email-text">{Config.email}</p>
                </div>
                <div className="header-phone">
                    <i className="fas fa-phone-square"></i>
                    <p className="header-phone-text">{Config.phone}</p>
                </div>
                <div className="header-social-media">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-youtube"></i>
                </div>           
            </div>
            
        </div>         
    )
}

export default Header
