import React from 'react'

//rfce + enter
const Pricing = () => {
    
    return (        
        <div id="pricing" className="pricing">
            <h1 className="section-title pricing-title">PRICING</h1>
            <div className="pricing-content">
                <section className="pricing-container">
                    <div className="membertype">
                        <h3 className="membertype-title">Full Adult membership</h3>
                        <p className="membertype-description">16 years and over</p>
                        <br />
                        <p className="membertype-price">$85 per month</p>
                    </div>                
                    <div className="membertype">
                        <h3 className="membertype-title">Full Child membership  </h3>                    
                        <p className="membertype-description">15 years and under</p>
                        <br />
                        <p className="membertype-price">$50 per month</p>
                    </div>                
                    <div className="membertype">
                        <h3 className="membertype-title">Short term visitor</h3>
                        <p className="membertype-description">Can use only twice</p>
                        <br />
                        <p className="membertype-price">$150 for a 3-month period</p>
                    </div>                
                    <div className="membertype">
                        <h3 className="membertype-title">Beginner courses</h3>
                        <p className="membertype-description">Kendo, Iaido or Naginata</p>
                        <br />
                        <p className="membertype-price">
                            $150 for 6 times -Adult
                            <br/>
                            $50 for 6 times - Child 
                        </p>
                    </div>
                </section>               
            </div>
        </div>         
    )
}

export default Pricing
