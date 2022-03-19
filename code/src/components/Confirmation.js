import React from "react";
import OverviewImg from './img/overview-img.png'




const Confirmation = ( {restart, questionNum} ) => {

    console.log(questionNum)
    return <div className='confirmation-page '> 
        <div className='confirmation-container'>
        <img src={OverviewImg} alt='teddy bear'/>
        <h2> Thank you for the feedback</h2>
        <p>
             We value your opinion and constantly improve the service. 
            In the mean time, we hope that you enjoy our service and look forward to seeing you again
        </p>

        <button type='button' className='btn restart-btn' onClick={restart}>Restart</button>
        </div>
    </div>

}


export default Confirmation;