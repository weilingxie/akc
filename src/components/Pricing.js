import React from 'react'

//rfce + enter
const Pricing = () => {
    
    return (        
        <div id="pricing" className="pricing">
            <div className="pricing-container">
                <h1 className="section-title pricing-title">PRICING</h1>
                <div className="pricing-content">
                    <section className="pricing-section">
                        <div className="membertype">
                            <h3 className="membertype-title">Full Adult membership</h3>
                            <p className="membertype-description">16 years and over</p>
                            <p className="membertype-price">$85 per month</p>
                        </div>                
                        <div className="membertype">
                            <h3 className="membertype-title">Full Child membership  </h3>                    
                            <p className="membertype-description">15 years and under</p>
                            <p className="membertype-price">$50 per month</p>
                        </div>                
                        <div className="membertype">
                            <h3 className="membertype-title">Short term visitor</h3>
                            <p className="membertype-description">Can use only twice</p>
                            <p className="membertype-price">$150 for a 3-month period</p>
                        </div>                
                        <div className="membertype">
                            <h3 className="membertype-title">Beginner courses</h3>
                            <p className="membertype-description">Kendo, Iaido or Naginata</p>
                            <p className="membertype-price">
                                $150 for 6 times -Adult
                                <br/>
                                $50 for 6 times - Child 
                            </p>
                        </div>
                    </section>
                    <section className="pricing-note">
                        <h2>Please note:</h2>
                        <p>• Family concessions are available</p>
                        <p>• Dojo initial joining fee ($50 one off) and NZKF fee ($50/ yr)  applicable to all full-time members</p>
                        <p>• An annual floor maintenance levy of $30 / year applies to all full-time members regardless of age</p>
                        <p>• Payment system for full time members available weekly/ bi weekly or monthly</p>
                        <p>Any queries regarding fees please text Kenneth Lim on 0274 397 371 (allow 24 hours for reply)  or if urgent ring Graham on 0274 063188</p>
                    </section>             
                </div>
            </div>
        </div>         
    )
}

export default Pricing
