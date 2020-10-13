import React from 'react'

//rfce + enter
const Landing = () => {
    
    return (        
        <div className="landing">
            <div className="landing-left">
                <p className="landing-title landing-title1">AUCKLAND</p>
                <p className="landing-title landing-title2">KENDO CLUB</p>
                <p className="landing-subtitle">Dedicated dojo</p>
                <p className="landing-subtitle">NZ best instructors team</p>
                <button className="landing-btn">JOIN US NOW</button>
            </div>
            <div className="landing-right">
                <iframe 
                    title="landing-video" 
                    className="landing-video" 
                    src="https://www.youtube.com/embed/a-ZQBX4pnc8" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>                        
                </iframe>
            </div>            
        </div>         
    )
}

export default Landing
