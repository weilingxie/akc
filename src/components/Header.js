import React from 'react'
const Config = require('../config.json') 


//rfce + enter
const Header = () => {
    
    return (        
        <header>           
            <div className="header-sub">
                <ul>
                    <li className="header-address">
                        <i className="fas fa-map-marked fa-2x" ></i>
                        <p className="header-address-text" >{Config.address}</p>
                    </li>
                    <li className="header-email">
                        <i className="fas fa-envelope fa-2x"></i>
                        <p className="header-email-text" >{Config.email}</p>
                    </li>
                    <li className="header-phone">
                        <i className="fas fa-phone-square fa-2x"></i>
                        <p className="header-phone-text" >{Config.phone}</p>
                    </li>
                    <li className="header-social-media">
                        <i className="fab fa-facebook-square fa-2x"></i>
                        <i className="fab fa-youtube fa-2x"></i>
                    </li>    
                </ul>           
            </div>                                 
        </header>         
    )
}

export default Header