import React from 'react'



const Mediahours = ({hourselect, onHourSelect, onNextChange, onBackChange }) => {
    return (
            <section className="container">
                
                <h2>How many hours per day do you spend with a media device?</h2>
                <select 
                    className="dropdown"
                    value={hourselect}
                    onChange={onHourSelect}> 

                    <option value="">Please be honest</option>
                    <option value="0-2">0-2 </option>
                    <option value="2-4">2-4 </option>
                    <option value="4-6">4-6 </option>
                    <option value="6-8">6-8 </option>
                    <option value="8-10">8-10 </option>
                    <option value="10-12">10-12 </option>
                    <option value="12-14">12-14 </option>
                    <option value="+14">+ 14  &#40;I live online&#41; </option>
                    </select>
                    
                    <button onClick={onNextChange} className="btn">Next question</button>
                    <button className="btn" onClick={onBackChange}>Back</button>
                </section>
    )
}

export default Mediahours