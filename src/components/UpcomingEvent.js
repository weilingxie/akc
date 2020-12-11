import React from 'react'
const Config = require('../config.json') 

//rfce + enter
const UpcomingEvent = () => { 

    return (        
        <div id="upcomingEvent" className="upcomingEvent" >
            <div className="upcomingEvent-container">
                <h1 className="section-title">UPCOMING EVENTS</h1>
                <p className="upcomingEvent-content">{Config.upcomingEvent}</p>
                <p className="upcomingEvent-content upcomingEvent-subcontent"><a href={Config.membership}>-INFORMATION-</a> Sign up by ringing or texting 0274063188</p>
            </div>
        </div>         
    )
}

export default UpcomingEvent
