import React from 'react';
import './brand.css'

const allBrands = [
  'Nike',
  'Reebok',
  'Asics',
  'New Balance',
  'Adidas',
  'Puma'
]

export const Brand = ({ brand, setBrand }) => {
  const handleBrandChange = (event) => {
    setBrand(event.target.value)
  }
  return (
    <div>
      <h1 className="survey-title">Sneaker Survey</h1>
      <h2>Which is your favorite sneaker brand?</h2>
      <p>Please, pick one of below</p>
      <p>Brand:</p>
      <form className="form-radio-btn" aria-label="radio buttons brands">
        {allBrands.map((singleBrand) => (
          <label className="radio-btn-control" key={singleBrand} htmlFor="BrandsRadioButtons">
            {' '}
            {singleBrand}
            <input
              className="radio-btn"
              id="BrandsRadioButtons"
              type="radio"
              value={singleBrand}
              onChange={handleBrandChange}
              checked={brand === singleBrand} />
          </label>
        ))}
      </form>
    </div>
  )
}
