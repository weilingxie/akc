import React from 'react'
const Config = require('../config.json') 


//rfce + enter
const Header = () => {
    
    return (        
        <div className="header">
            <p className="header-address">{Config.address}</p>
            <p className="header-email">{Config.email}</p>
            <p className="header-phone">{Config.phone}</p>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-youtube"></i>
        </div>         
    )
}

export default Header
