import React from 'react'


//rfce + enter
const Schedule = () => {  

    return (        
        <div id="schedule" className="schedule">
            <div className="schedule-container">
                <h1 className="section-title">SCHEDULE</h1>                           
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th className="MON">MON</th> 
                            <th className="TUE">TUE</th>
                            <th className="WED">WED</th>
                            <th className="THU">THU</th>
                            <th className="FRI">FRI</th>
                            <th className="SAT">SAT</th>
                            <th className="SUN">SUN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td>KENDO</td>
                            <td className="MON">
                                <p>ALL<br />7-8.30pm</p>
                            </td>
                            <td className="TUE"></td>
                            <td className="WED">
                                <p>ALL<br />7-8.30pm</p>                            
                            </td>
                            <td className="THU"></td>
                            <td className="FRI"></td>
                            <td className="SAT">
                                <p>ADVANCED<br />8-9am</p>
                                <p>BEGINNER<br />9.30-11am</p>
                            </td>
                            <td className="SUN"></td>                        
                        </tr>
                            <tr className="even">
                                <td>IAIDO</td>
                                <td className="MON"></td>
                                <td className="TUE"></td>
                                <td className="WED"></td>
                                <td className="THU">
                                    <p>7-9pm</p>
                                </td>
                                <td className="FRI"></td>
                                <td className="STA"></td>
                                <td className="SUN"></td>
                            </tr>
                            <tr className="odd">
                                <td>NAGINATA</td>
                                <td className="MON">
                                    <p>6-7pm</p>
                                </td>
                                <td className="TUE"></td>
                                <td className="WED"></td>
                                <td className="THU"></td>
                                <td className="FRI"></td>
                                <td className="SAT"></td>
                                <td className="SUN"></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="schedule-note">
                        <div>- Supported languages: English, Japanese, Chinese, Spanish, German, Polish and Russian.</div>
                        <div>- Unfortunately, free lessons aren’t offered due to Health and Safety reasons. Only beginners course participants, full-time members and visiting kenshi can participate. However, anyone is welcome to watch.</div>
                        <div>- If you’re a beginner, please wear some comfortable trousers and a T-shirt. Everything else is provided.</div>
                        <div>- NZKF and IKF registered kenshi and are always welcome to train with us. While it isn’t compulsory, a voluntary donation would be much appreciated. </div>    
                    </div>
                </div>
          </div>  
    )
}

export default Schedule
