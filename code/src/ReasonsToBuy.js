import React from 'react';

const GOOD_GUARANTEE_VALUE = "good guarantee policy";

const ReasonsToBuy = ({ userReasons, onReasonsChange }) => {
  return (
    <div className="section-reasons-to-buy" id="sectionReasonsToBuy">
        <p tabIndex="0">What are the reasons that made you decide to own (a) Suzuki car(s)?</p>
        <div className="reasons-to-buy-container">
            <article className="reasons-input-element">
                <input tabIndex="0"
                    id="goodQuality"
                    className="check-box-button"
                    type="checkbox"
                    checked={userReasons.includes("good quality")}
                    onChange={() => onReasonsChange("good quality")}
                />
                <label htmlFor="goodQuality">Good Quality</label>
            </article>
            <article className="reasons-input-element">
                <input tabIndex="0"
                    id="goodPrice"
                    className="check-box-button"
                    type="checkbox"
                    checked={userReasons.includes("good price")}
                    onChange={() => onReasonsChange("good price")}
                />
                <label htmlFor="goodPrice">Good Price</label>
            </article>
            <article className="reasons-input-element">
                <input tabIndex="0"
                    id="goodDesign"
                    className="check-box-button"
                    type="checkbox"
                    checked={userReasons.includes("good design")}
                    onChange={() => onReasonsChange("good design")}
                 />
                <label htmlFor="goodDesign">Good Design</label>
            </article>
            <article className="reasons-input-element">
                <input tabIndex="0"
                    id="goodAfterSalesServices"
                    className="check-box-button"
                    type="checkbox"
                    checked={userReasons.includes("good aftersales services")}
                    onChange={() => onReasonsChange("good aftersales services")}
                />
                <label htmlFor="goodAfterSalesServices">Good Aftersales Services</label>
            </article>
            <article className="reasons-input-element">
                <input tabIndex="0"
                    id="goodInitiatives"
                    className="check-box-button"
                    type="checkbox"
                    checked={userReasons.includes("good initiatives")}
                    onChange={() => onReasonsChange("good initiatives")}
                />
                <label htmlFor="goodInitiatives">Good Initiatives</label>
            </article>
            <article className="reasons-input-element">
                <input tabIndex="0"
                    id="goodGuaranteePolicy"
                    className="check-box-button"
                    type="checkbox"
                    checked={userReasons.includes(GOOD_GUARANTEE_VALUE)}
                    onChange={() => onReasonsChange(GOOD_GUARANTEE_VALUE)}
                />
                <label htmlFor="goodGuaranteePolicy">Good Guarantee Policy</label>
            </article>
            <article className="reasons-input-element">
                <input tabIndex="0"
                    id="lowMaintenanceCost"
                    className="check-box-button"
                    type="checkbox"
                    checked={userReasons.includes("low maintenance cost")}
                    onChange={() => onReasonsChange("low maintenance cost")}
                />
                <label htmlFor="lowMaintenanceCost">Low Maintenance Cost</label>
            </article>
            <article className="reasons-input-element">
                <input tabIndex="0"
                    id="practicability"
                    className="check-box-button"
                    type="checkbox"
                    checked={userReasons.includes("Practicability")}
                    onChange={() => onReasonsChange("Practicability")}
                />
                <label htmlFor="practicability">Practicability</label>
            </article>
            
        </div>
    </div>
    );
}
 
export default ReasonsToBuy;