import React from 'react';

const reasons = [
    {
        id:"goodQuality",
        checked:"goodQuality",
        label:"Good Quality",
    },
    {
        id:"goodPrice",
        checked:"goodPrice",
        label:"Good Price",
    },
    {
        id:"goodDesign",
        checked:"goodDesign",
        label:"Good Design",
    },
    {
        id:"goodAfterSalesServices",
        checked:"goodAfterSalesServices",
        label:"Good Aftersales Services",
    },
    {
        id:"goodGuaranteePolicy",
        checked:"goodGuaranteePolicy",
        label:"Good Guarantee Policy",
    },
    {
        id:"goodInitiatives",
        checked:"goodInitiatives",
        label:"Good Initiatives",
    },
    {
        id:"lowMaintenanceCost",
        checked:"lowMaintenanceCost",
        label:"Low Maintenance Cost",
    },
    {
        id:"practicability",
        checked:"practicability",
        label:"Practicability",
    },
]

const ReasonsToBuy = ({ userReasons, onReasonsChange }) => {
  return (
        <div className="section-reasons-to-buy" id="sectionReasonsToBuy">
            <p tabIndex="0">What are the reasons that made you decide to own (a) Suzuki car(s)?</p>
            {reasons.map((reason) => {
                return(
                    <div className="reasons-to-buy-container" key={reason.id}>
                        <article className="reasons-input-element">
                            <input 
                                tabIndex="0"
                                id={reason.id}
                                className="check-box-button"
                                type="checkbox"
                                checked={userReasons.includes(reason.label)}
                                onChange={() => onReasonsChange(reason.label)}
                            />
                            <label htmlFor={reason.id}>{reason.label}</label>
                        </article>
                    </div>
                )
            })}
        </div>
    );
};
 
export default ReasonsToBuy;
