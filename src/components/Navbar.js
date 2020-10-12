import React from 'react'

//rfce + enter
const Navbar = () => {
    /*const [ click, setClick ] = useState(false);*/
    return (        
          <div className="navbar">
                <img src={`${process.env.PUBLIC_URL}/images/akc-logo-small.png`} alt="Logo" />
                <div></div>
                <div className="navbar-btns">
                  <div className="navbar-btn navbar-home">
                    HOME
                  </div>
                  <div className="navbar-btn navbar-aboutus">
                    ABOUT US
                  </div>
                  <div className="navbar-btn navbar-instructors">
                    INSTRUCTORS
                  </div>
                  <div className="navbar-btn navbar-schedule">
                    SCHEDULE
                  </div>
                  <div className="navbar-btn navbar-pricing">
                    PRICING
                  </div>
                  <div className="navbar-btn navbar-events">
                    EVENTS
                  </div>
                  <div className="navbar-btn navbar-contactus">
                    CONTACT US
                  </div>
                </div>
                
          </div>  
    )
}

export default Navbar
