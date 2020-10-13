import React from 'react'

//rfce + enter
const Navbar = () => {
    /*const [ click, setClick ] = useState(false);*/
    return (        
          <div className="navbar"> 
                <img src={`${process.env.PUBLIC_URL}/images/akc-logo-small.png`} alt="Logo" />                
                <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
                                           
                <nav className="navbar-btns">
                  <ul>
                    <li className="navbar-btn navbar-home">
                      HOME
                    </li>
                    <li className="navbar-btn navbar-aboutus">
                      ABOUT
                    </li>
                    <li className="navbar-btn navbar-instructors">
                      INSTRUCTORS
                    </li>
                    <li className="navbar-btn navbar-schedule">
                      SCHEDULE
                    </li>
                    <li className="navbar-btn navbar-pricing">
                      PRICING
                    </li>
                    <li className="navbar-btn navbar-events">
                      EVENTS
                    </li>
                    <li className="navbar-btn navbar-contactus">
                      CONTACT
                    </li>
                  </ul>                  
                </nav>        
                <label htmlFor="nav-toggle"><i className="fas fa-bars fa-2x nav-toggle-label" ></i></label>         
          </div>  
    )
}

export default Navbar
