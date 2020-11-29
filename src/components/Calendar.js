import React from 'react';

const Calendar = () => {
    return (
        <div id="calendar" className="calendar">
            <h1 className="section-title">CALENDAR</h1>
            <div className="calendar-container">                
                <iframe title="calendar-google" src="https://calendar.google.com/calendar/embed?height=675&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Pacific%2FAuckland&amp;src=N29vbWtoZzJwb200cWlyanQ4YzNqMTltaTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4ubmV3X3plYWxhbmQjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23F09300&amp;color=%230B8043&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0" width="1200" height="675" frameborder="0" scrolling="no"></iframe>
            </div>
        </div>
    );
}

export default Calendar;
