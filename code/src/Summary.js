import React from 'react';

export const Summary = (props) => {
    return <div className="summaryStyle">
               
                    <p>thank you! we will contact you as soon as we find a cat that suits you. hope you will love your new bestfriend for ever and ever!
                    </p>    
                    <div className="summaryContent">
        
                    </div>
                    <p>your choise of cat: {props.gender}</p>
                    <p>what you offer your cat: {props.home} </p>
               
            </div>
}