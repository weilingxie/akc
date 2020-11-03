import React from 'react'

//rfce + enter
const Pricing = () => {
    
    return (        
        <div id="pricing" className="pricing">
            <h1 className="pricing-title">PRICING</h1>
            <div className="pricing-content">
                <section className="pricing-container">
                    <h2 className="pricing-subtitle">ADULT</h2>
                    <div className="membertype">
                        <h3 className="membertype-title">Beginner Course</h3>
                        <p className="membertype-description">description ...can be purchased ONCE</p>
                        <br />
                        <p classNmae="membertype-price">$210 for 10 weeks access</p>
                    </div>                
                    <div className="membertype">
                        <h3 className="membertype-title">Adult 2nd dan and under</h3>                    
                        <p className="membertype-description">description ...</p>
                        <br />
                        <p classNmae="membertype-price">$30 Joining Fee<br/>+ $95/month<br/>+ $50 NZKF Fee/year</p>
                    </div>                
                    <div className="membertype">
                        <h3 className="membertype-title">Adult 3nd dan and above</h3>
                        <p className="membertype-description">description</p>
                        <br />
                        <p classNmae="membertype-price">$30 Joining Fee<br/>+ $80/month<br/>+ $50 NZKF Fee/year</p>
                    </div>                
                    <div className="membertype">
                        <h3 className="membertype-title">Visitor</h3>
                        <p className="membertype-description">description ...can be purchased TWICE</p>
                        <br />
                        <p classNmae="membertype-price">$150 for 3 months access</p>
                    </div>
                </section>
                <section className="pricing-container">
                    <h2 className="pricing-subtitle">KID&FAMILY</h2>
                    <div className="membertype">
                        <h3 className="membertype-title">Kids 14 years or under</h3>
                        <p className="membertype-description">description </p>
                        <br />
                        <p classNmae="membertype-price">$20 Joining Fee<br/>+ $40/month<br/>+ $50 NZKF Fee/year</p>
                    </div>
                    <div className="membertype">
                        <h3 className="membertype-title">1 Parent + 1 Child 14 years or under</h3>
                        <p className="membertype-description">description</p>
                        <br />
                        <p classNmae="membertype-price">$60 Joining Fee<br/>+ $110/month<br/>+ $100 NZKF Fee/year</p>
                    </div>
                    <div className="membertype">
                        <h3 className="membertype-title">Family (N person, minimum 2)</h3>
                        <p className="membertype-description">description</p>
                        <br />
                        <p classNmae="membertype-price">$30*N Joining Fee<br/>+ $70*N/month<br/>+ $50*N NZKF Fee/year</p>
                    </div>
                </section>
            </div>
        </div>         
    )
}

export default Pricing
