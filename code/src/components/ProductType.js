/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

// This is the firstquestion thats comes up
const productTypes = [
  'Baby Clothes',
  'Baby Accessories',
  'Clothes my size',
  'Accessories for me'
];

const ProductType = ({ setProductType, productType, step }) => {
  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  }
  return (
    <div className="question-div productQ">
      <form className="formContainer">
        <h1>What kind of clothes would you buy?</h1>
        {productTypes.map(
          (
            product // iterating through each product available
          ) => {
            return (
              <div key={product} className="productType-choice">
                <input
                  value={product}
                  onChange={handleProductTypeChange}
                  type="checkbox"
                  id={product} />
                <label htmlFor={product}>{product}</label>
              </div>);
          }
        )}
      </form>
      <div>
        <p>hej {productType}, now we are on step {step}</p>
      </div>
    </div>
  )
}
export default ProductType