import React from 'react';

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
      <h1>Which is your favorite sneaker brand?</h1>
      <p>Please, pick one of below</p>
      <form>
        Brand:
        {allBrands.map((singleBrand) => (
          <label key={singleBrand} htmlFor="radio-btn">
            {' '}
            {singleBrand}
            <input
              className="radio-btn"
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
