import React from "react";

const Pricing = ({
  adultMonthlyPrice,
  childMonthlyPrice,
  adultSixLessonsPrice,
  childSixLessonsPrice,
  shortTermVisitorThreeMonthPrice,
  joiningFee,
  nzkfFee,
  floorMaintainingFee,
}) => {
  return (
    <div id="pricing" className="pricing">
      <div className="pricing-container">
        <h1 className="section-title pricing-title">PRICING</h1>
        <div className="pricing-content">
          <section className="pricing-section">
            <div className="membertype">
              <h3 className="membertype-title">Full Adult membership</h3>
              <p className="membertype-description">16 years and over</p>
              <p className="membertype-price">${adultMonthlyPrice} per month</p>
            </div>
            <div className="membertype">
              <h3 className="membertype-title">Full Child membership  </h3>
              <p className="membertype-description">15 years and under</p>
              <p className="membertype-price">${childMonthlyPrice} per month</p>
            </div>
            <div className="membertype">
              <h3 className="membertype-title">Short term visitor</h3>
              <p className="membertype-description">Can only use twice</p>
              <p className="membertype-price">
                ${shortTermVisitorThreeMonthPrice} for a 3-month period
              </p>
            </div>
            <div className="membertype">
              <h3 className="membertype-title">Beginner courses</h3>
              <p className="membertype-description">Kendo, Iaido or Naginata</p>
              <p className="membertype-price">
                ${adultSixLessonsPrice} for 6 lessons - Adult
                <br />${childSixLessonsPrice} for 6 lessons - Child 
              </p>
            </div>
          </section>
          <section className="pricing-note">
            <h2>Please note:</h2>
            <p>• Family concessions are available.</p>
            <p>
              • A ${joiningFee} one-off joining fee of is required for new
              members.
            </p>
            <p>
              • All full-time members are required to pay a ${nzkfFee} annual
              NZFK fee.
            </p>
            <p>
              • An annual floor maintenance levy of ${floorMaintainingFee}{" "}
              applies to all full-time members – regardless of age.
            </p>
            <p>
              • Payments can be made on a weekly, fortnightly or monthly basis.
            </p>
            <p>
              For further questions, please text Kenneth on 0274 397 371
              (replies within 24 hours), or ring Graham on 0274 063188 if
              urgent.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
