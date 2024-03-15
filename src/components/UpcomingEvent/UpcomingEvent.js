import React from "react";

const UpcomingEvent = ({
  upcomingEvent1,
  upcomingEvent2,
  upcomingEvent3,
  upcomingEvent1Url,
  upcomingEvent2Url,
  upcomingEvent3Url,
  membershipUrl,
}) => {
  return upcomingEvent1 || upcomingEvent2 || upcomingEvent3 ? (
    <div id="upcomingEvent" className="upcomingEvent">
      <div className="upcomingEvent-container">
        <h1 className="section-title">UPCOMING EVENTS</h1>
        {upcomingEvent1 && (
          <p className="upcomingEvent-content">
            {upcomingEvent1} <a href={upcomingEvent1Url} target="_blank" rel="noreferrer">-DETAILS-</a>
          </p>
        )}
        {upcomingEvent2 && (
          <p className="upcomingEvent-content">
            {upcomingEvent2} <a href={upcomingEvent2Url} target="_blank" rel="noreferrer">-DETAILS-</a>
          </p>
        )}
        {upcomingEvent3 && (
          <p className="upcomingEvent-content">
            {upcomingEvent3} <a href={upcomingEvent3Url} target="_blank" rel="noreferrer">-DETAILS-</a>
          </p>
        )}
        <p className="upcomingEvent-content upcomingEvent-subcontent">
          <a href={membershipUrl}>-INFORMATION-</a> Sign up by ringing or
          texting 0274063188
        </p>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default UpcomingEvent;
