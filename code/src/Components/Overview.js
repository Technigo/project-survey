import React from "react";
import './Overview.css'

const Overview = ({ nameInput, days, where }) => {
    return (
        <section className="summary">
            <h2>Summering</h2>
            <p style={{color: 'purple'}}>Namn : {nameInput}</p>
            {/* <p>Du vill träffas: {days === 'Skärtorsdagen 14 april' ? 'Långfredagen 15 april' ? 
            'Lördagen 16 april' ? 'Söndagen 17 april' : 'Måndagen 18 april'} </p>
            <p>Du vill träffas: {where === 
            'Hemma hos mig' ? 
            : 'Hemma hos någon annan' ? 
            : 'På restaurang' ?  :} </p> */}
            
        </section>
    );
};

export default Overview;