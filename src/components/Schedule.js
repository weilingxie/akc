import React from 'react'


//rfce + enter
const Schedule = () => {  

    return (        
        <div id="schedule" className="schedule">
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
                    <div>- Supported Languages: English, Japanese, Mandarin</div>
                    <div>- Sorry free lessons are no longer offered due to Health & Safety reasons; to participate in lessons you must either be signed up as Beginners Introductory course or Full Membership. Those who are neither are more than welcome to observe lessons</div>
                    <div>- Beginners please wear trousers or tracksuit pants and tee-shirt. Everything else is provided</div>
                    <div>- NZKF registered Kenshi are welcome at anytime to the AKC – There is a donation box should you feel you wish to contribute toward the upkeep of the dojo</div>    
                </div>
                
          </div>  
    )
}

export default Schedule
