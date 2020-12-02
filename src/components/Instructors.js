import React from 'react'

//rfce + enter
const Instructors = () => {
    
    return (        
        <div id="instructors" className="instructors">
            <div className="instructors-container">
                <div className="instructor-kendo">
                    <h1 className="section-title">INSTRUCTORS</h1>
                    <h2 className="instructor-type">KENDO</h2>
                    <div className="instructor-kendo-container">
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
                                    <img className="instructor-photo" src={`${process.env.PUBLIC_URL}/images/Ken-Wells.jpg`} alt="gramham.sayer" />
                                    <p className="instructor-name">Ken Wells</p>
                                </div>
                                <div className="instructor-card">
                                    <img className="instructor-photo" src={`${process.env.PUBLIC_URL}/images/Alan-Stephenson.jpg`} alt="gramham.sayer" />
                                    <p className="instructor-name">Alan Stephenson</p>
                                </div>
                                <div className="instructor-card">
                                    <img className="instructor-photo" src={`${process.env.PUBLIC_URL}/images/Shin-Hamada.jpg`} alt="gramham.sayer" />
                                    <p className="instructor-name">Shin Hamada</p>
                                </div>                            
                                <div className="instructor-card">
                                    <img className="instructor-photo" src={`${process.env.PUBLIC_URL}/images/Oscar-Xing1.jpeg`} alt="gramham.sayer" />
                                    <p className="instructor-name">Oscar Xing</p>
                                </div>
                            </div>
                        </div>
                </div>
                    <div className="instructor-dan instructor-5thDan">
                        <h3 className="instructor-dan-name">5th Dan</h3>
                        <div className="instructor-card-container">
                            <div className="instructor-card">
                                <img className="instructor-photo" src={`${process.env.PUBLIC_URL}/images/Kirk-Doran.jpeg`} alt="gramham.sayer" />
                                <p className="instructor-name">Kirk Doran</p>
                            </div>
                        </div>               
                    </div>
                </div>

                <div className="instructor-iaido">
                    <h2 className="instructor-type">IAIDO</h2>
                    <div className="instructor-iaido-container">                
                        <div className="instructor-dan instructor-5thDan">
                            <h3 className="instructor-dan-name">5th Dan</h3>
                            <div className="instructor-card-container">
                                <div className="instructor-card">
                                    <img className="instructor-photo" src={`${process.env.PUBLIC_URL}/images/Stuart-Fairweather1.jpeg`} alt="gramham.sayer" />
                                    <p className="instructor-name">Stuart Fairweather</p>
                                </div>
                                <div className="instructor-card">
                                    <img className="instructor-photo" src={`${process.env.PUBLIC_URL}/images/Brent-Hansen.jpg`} alt="gramham.sayer" />
                                    <p className="instructor-name">Brent Hansen</p>
                                </div>
                                <div className="instructor-card">
                                    <img className="instructor-photo" src={`${process.env.PUBLIC_URL}/images/Matthew-fox-Wilson1.jpeg`} alt="gramham.sayer" />
                                    <p className="instructor-name">Matthew Fox-Wilson</p>
                                </div>
                            </div>
                        </div>                
                    </div>
                </div>            

                <div className="instructor-naginata">
                    <h2 className="instructor-type">NAGINATA</h2>
                    <div className="instructor-naginata-container">                
                        <div className="instructor-dan instructor-2ndDan">
                            <h3 className="instructor-dan-name">2nd Dan</h3>
                            <div className="instructor-card-container">
                                <div className="instructor-card">
                                    <img className="instructor-photo" src={`${process.env.PUBLIC_URL}/images/Glenn-Selwyn.jpeg`} alt="gramham.sayer" />
                                    <p className="instructor-name">Glenn Selwyn</p>
                                </div>
                            </div>
                        </div>                
                    </div>
                </div>
            </div>
        </div>         
    ) 
}

export default Instructors
