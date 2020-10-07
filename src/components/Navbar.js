import React from 'react'

//rfce + enter
const Navbar = () => {
    /*const [ click, setClick ] = useState(false);*/
    return (        
          <nav className="navbar">
            <div className="navbar-container">
                <img src={`${process.env.PUBLIC_URL}/images/akc-logo-small.png`} alt="Logo" />
                <div className="navbar-home">
                  HOME
                </div>
                <div className="navbar-aboutus">
                  ABOUT US
                </div>
                <div className="navbar-instructors">
                  INSTRUCTORS
                </div>
                <div className="navbar-schedule">
                  SCHEDULE
                </div>
                <div className="navbar-pricing">
                  PRICING
                </div>
                <div className="navbar-events">
                  EVENTS
                </div>
                <div className="navbar-contactus">
                  CONTACT US
                </div>
            </div>
          </nav>  
    )
}

export default Navbar
