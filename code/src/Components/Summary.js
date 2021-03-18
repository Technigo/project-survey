import React from 'react';

function refreshPage() {
    window.location.reload(false);
}


const Summary = (props) => {
    const { name } = props;
    const { email } = props;
    const { wantObjectInspiration } = props;
    const { type } = props;
    const { type2 } = props;
    const { buildstyle } = props;

    return (
        <div className="form-summary">
            <div className="summary-headline">
                    Thank you for answering {name}!
                </div>
               
                <div className="summary-radio">
                    You're prefered living is {type}
                </div>
               
                
                <div className="summary-select">
                   You're favourite style is {buildstyle}
                </div>
           
                
                <div className="button-container">
           <button className="refresh-button" onClick={refreshPage}>Refresh</button>
       </div>
          

        </div>
        
       
    );
};

export default Summary;

