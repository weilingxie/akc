import React from 'react'

//rfce + enter
const Instructors = () => {
    
    return (        
        <div className="instructors">
            <h1 className="instructor-title">INSTRUCTORS</h1>
            <h1 className="instructor-type">KENDO</h1>
            <div className="instructor-kendo">
                <div className="instructor-dan instructor-7thDan">
                    <h3 className="instructor-dan-name">7th Dan</h3>
                    <div className="instructor-card-container">
                        <div className="instructor-card">
                            <img className="instructor-photo" src={`${process.env.PUBLIC_URL}/images/Graham-Sayer.jpg`} alt="gramham.sayer" />
                            <p className="instructor-name">Graham Sayer</p>
                        </div>
                    </div>               
                </div>
                <div className="instructor-dan instructor-6thDan">
                    <h3 className="instructor-dan-name">6th Dan</h3>
                    <div className="instructor-card-container">
                        <div className="instructor-card">
                            <img className="instructor-photo" src={`${process.env.PUBLIC_URL}/images/Graham-Sayer.jpg`} alt="gramham.sayer" />
                            <p className="instructor-name">Graham Sayer</p>
                        </div>
                        <div className="instructor-card">
                            <img className="instructor-photo" src={`${process.env.PUBLIC_URL}/images/Graham-Sayer.jpg`} alt="gramham.sayer" />
                            <p className="instructor-name">Graham Sayer</p>
                        </div>
                        <div className="instructor-card">
                            <img className="instructor-photo" src={`${process.env.PUBLIC_URL}/images/Graham-Sayer.jpg`} alt="gramham.sayer" />
                            <p className="instructor-name">Graham Sayer</p>
                        </div>
                    </div>
                </div>
                <div className="instructor-dan instructor-5thDan">
                    <h3 className="instructor-dan-name">5th Dan</h3>
                    <div className="instructor-card-container">
                        <div className="instructor-card">
                            <img className="instructor-photo" src={`${process.env.PUBLIC_URL}/images/Graham-Sayer.jpg`} alt="gramham.sayer" />
                            <p className="instructor-name">Graham Sayer</p>
                        </div>
                    </div>               
                </div>
            </div>
            
        </div>         
    )
}

export default Instructors
