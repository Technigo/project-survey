import React from 'react';

const ReasonsToBuy = () => {
  return (
    <div className="reason-to-buy">
      <p>Please tell us what made you decide to buy Suzuki car(s)</p>
      <input type="checkbox" id="qualityReason" name="quality" value="Quality"/>
      <label for="qualityReason">Good Quality</label>
      <input type="checkbox" id="priceReason" name="price" value="Price"/>
      <label for="priceReason">Good Price</label>
      <input type="checkbox" id="afterSalesReason" name="aftersales" value="Aftersales"/>
      <label for="afterSalesReason">Good Aftersales Services</label>
      <input type="checkbox" id="designReason" name="design" value="Design"/>
      <label for="designReason">Good Design</label>
    </div>
    );
}
 
export default ReasonsToBuy;