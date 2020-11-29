import React from 'react'


//rfce + enter
const Navbar = () => {
    /*const [ click, setClick ] = useState(false);*/    

    return (        
          <div id="navbar" className="navbar"> 
                <img src={`${process.env.PUBLIC_URL}/images/akc-logo-small.png`} alt="Logo" />                
                <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
                                           
                <nav className="navbar-btns">
                  <ul>
                    <li className="navbar-btn navbar-home" >
                      <a href="#header">HOME</a>
                    </li>
                    <li className="navbar-btn navbar-aboutus">
                      <a href="#aboutUs">ABOUT</a>
                    </li>
                    <li className="navbar-btn navbar-instructors">
                      <a href="#instructors">INSTRUCTORS</a>
                    </li>
                    <li className="navbar-btn navbar-schedule">
                      <a href="#schedule">SCHEDULE</a>
                    </li>
                    <li className="navbar-btn navbar-pricing">
                      <a href="#pricing">PRICING</a>
                    </li>
                    <li className="navbar-btn navbar-events">
                      <a href="#upcomingEvent">EVENTS</a>
                    </li>
                    <li className="navbar-btn navbar-events">
                      <a href="#calendar">CALENDAR</a>
                    </li>
                    <li className="navbar-btn navbar-contactus">
                    <a href="#contactUs">CONTACT</a>
                    </li>
                  </ul>                  
                </nav>        
                <label htmlFor="nav-toggle"><i className="fas fa-bars fa-2x nav-toggle-label" ></i></label>         
          </div>  
    )
}

export default Navbar
