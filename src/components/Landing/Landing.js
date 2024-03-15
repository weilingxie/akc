import React from "react";

const Landing = ({ membershipUrl, landingVideoUrl }) => {
  return (
    <div id="landing" className="landing">
      <div className="landing-left">
        <div className="landing-left-container">
          <p className="landing-title landing-title1">CULTIVATE YOUR BEING</p>
          <p className="landing-subtitle">
            Lifelong mental and physical development
          </p>
          <a href={membershipUrl} target="_blank" rel="noreferrer">
            <button className="landing-btn">
              <div>BEGIN YOUR JOURNEY</div>
              <div className="landing-btn-2">(BEGINNER COURSE)</div>
            </button>
          </a>
        </div>
      </div>
      <div className="landing-right">
        <div className="landing-right-container">
          <iframe
            title="landing-video"
            className="landing-video"
            src={landingVideoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Landing;
