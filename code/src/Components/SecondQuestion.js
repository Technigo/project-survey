import React from "react";

const SecondQuestion = ({
    days,
    onDayChange,
    onStepChange,
}) => {
    return (
        <div className="main">
        <div className="container">
        <form>
            <label className="label1">
                 Vilka dagar kan du? 
              <select className="Days" value={days} onChange={onDayChange}>
                  <option value="Skärtorsdagen 14 april">Skärtorsdagen 14 april</option>
                  <option value="Långfredagen 15 april">Långfredagen 15 april</option>
                  <option value="Lördagen 16 april">Lördagen 16 april</option>
                  <option value="Söndagen 17 april">Söndagen 17 april</option>
                  <option value="Måndagen 18 april">Måndagen 18 april</option>
                  </select>  
            </label>
        

        <button onClick={onStepChange}>Nästa fråga</button>
        </form>
        </div>
        </div>
    );
};

export default SecondQuestion;