/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

// This is the firstquestion thats comes up
const productTypes = [
  'Baby Clothes',
  'Baby Accessories',
  'Clothes my size',
  'Accessories for me'
];

const ProductType = ({ setProductType }) => {
  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  }
  return (
    <form className="formContainer">
      <h1>What kind of clothes would you buy?</h1>
      {productTypes.map(
        (
          productType // iterating through each venue available
        ) => {
          return (
            <div key={productType} className="productType-choice">
              <input
                value={productType}
                onChange={handleProductTypeChange}
                type="checkbox"
                id={productType} />
              <label htmlFor={productType}>{productType}</label>
            </div>);
        }

      )}
    </form>
  )
}
console.log(productTypes);
export default ProductType