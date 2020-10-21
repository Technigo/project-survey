import React from 'react';

const ReasonsToBuy = ({ userReasons, onReasonsChange }) => {
  return (
    <section className="reasons-to-buy">
        <p>What are the reasons that make you decided to own (a) Suzuki car(s)?</p>
        <div>
            <label htmlFor="goodQuality">Good Quality</label>
            <input
                id="goodQuality"
                type="checkbox"
                checked={userReasons.includes('good quality')}
                onChange={() => onReasonsChange('good quality')}
            />
            <label htmlFor="goodPrice">Good Price</label>
            <input
                id="goodPrice"
                type="checkbox"
                checked={userReasons.includes('good price')}
                onChange={() => onReasonsChange('good price')}
            />
            <label htmlFor="goodDesign">Good Design</label>
            <input
                id="goodDesign"
                type="checkbox"
                checked={userReasons.includes('good design')}
                onChange={() => onReasonsChange('good design')}
            />
            <label htmlFor="goodAfterSalesServices">Good Aftersales Services</label>
            <input
                id="goodAfterSalesServices"
                type="checkbox"
                checked={userReasons.includes('good aftersales services')}
                onChange={() => onReasonsChange('good aftersales services')}
            />
            <label htmlFor="goodInitiatives">Good Initiatives</label>
            <input
                id="goodInitiatives"
                type="checkbox"
                checked={userReasons.includes('good initiatives')}
                onChange={() => onReasonsChange('good initiatives')}
            />
        </div>
    </section>
    );
}
 
export default ReasonsToBuy ;