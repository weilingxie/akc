import React from 'react'
const Config = require('../config.json') 

//rfce + enter
const UpcomingEvent = () => {
    
    return (        
        <div className="upcomingEvent">
            <p className="lupcomingEvent-title">UPCOMING EVENT - </p>
            <p className="lupcomingEvent-content">{Config.upcomingEvent}</p>
        </div>         
    )
}

export default UpcomingEvent
