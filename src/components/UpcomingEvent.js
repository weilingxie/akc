import React from 'react'
const Config = require('../config.json') 

//rfce + enter
const UpcomingEvent = () => { 

    return (        
        <div id="upcomingEvent" className="upcomingEvent" >
            <h1 className="section-title">UPCOMING EVENTS</h1>
            <p className="upcomingEvent-content">{Config.upcomingEvent}</p>
        </div>         
    )
}

export default UpcomingEvent
