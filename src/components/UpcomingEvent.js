import React from 'react'
const Config = require('../config.json') 

//rfce + enter
const UpcomingEvent = () => {
    
    return (        
        <div className="upcomingEvent">
            <div className="upcomingEvent-title">UPCOMING EVENT - </div>
            <div className="upcomingEvent-content">{Config.upcomingEvent}</div>
        </div>         
    )
}

export default UpcomingEvent
