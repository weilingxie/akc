import React from "react";
const Config = require("../../config.json");

//rfce + enter
const UpcomingEvent = ({ upcomingEvent1, upcomingEvent2, upcomingEvent3 }) => {
  return upcomingEvent1 || upcomingEvent2 || upcomingEvent3 ? (
    <div id="upcomingEvent" className="upcomingEvent">
      <div className="upcomingEvent-container">
        <h1 className="section-title">UPCOMING EVENTS</h1>
        {upcomingEvent1 && (
          <p className="upcomingEvent-content">
            {upcomingEvent1} <a href={Config.membership}>-DETAILS-</a>
          </p>
        )}
        {upcomingEvent2 && (
          <p className="upcomingEvent-content">
            {upcomingEvent2} <a href={Config.membership}>-DETAILS-</a>
          </p>
        )}
        {upcomingEvent3 && (
          <p className="upcomingEvent-content">
            {upcomingEvent3} <a href={Config.membership}>-DETAILS-</a>
          </p>
        )}
        <p className="upcomingEvent-content upcomingEvent-subcontent">
          <a href={Config.membership}>-INFORMATION-</a> Sign up by ringing or
          texting 0274063188
        </p>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default UpcomingEvent;
