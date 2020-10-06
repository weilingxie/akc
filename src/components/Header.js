import React, { useState} from 'react'
import { Link } from 'react-router-dom'


//rfce + enter
const Header = () => {
    const [ click, setClick ] = useState(false);
    return (
        <>
          <nav className="header">
            <div className="navbar-container">
                <img src={`${process.env.PUBLIC_URL}/images/akc-logo-small.png`} alt="Logo" />
                <Link to="/" className="navbar-logo">                    
                </Link>
                <div className='menu-icon'>   
                  <i class="fas fa-bars"></i>
                </div>
            </div>
          </nav>  
        </>
    )
}

export default Header
