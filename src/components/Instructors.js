import React from 'react'

//rfce + enter
const Instructors = () => {
    
    return (        
        <div className="instructors">
            <h1 className="linstructors-title">UPCOMING EVENT - </h1>
            <div className="instructors-7thDan">
                <h3 className="instructors-dan">7th Ddan</h3>
                <div className="instructors-card">
                    <img className="instructor-photo" src={`${process.env.PUBLIC_URL}/images/Graham-Sayer.jpg`} alt="gramham.sayer" />
                    <p className="instructor-name">Graham Sayer</p>
                </div>
            </div>
        </div>         
    )
}

export default Instructors
