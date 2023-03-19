/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */

import React from 'react';
import Vinylimage from '../images/vinylicon.jpg'
import Posterimage from '../images/postericon.jpg'
import Fadsimage from '../images/fadicon.jpg'
import Consoleimage from '../images/consoleicon.jpg'

const products = [
  'Exclusive vinyl records',
  'Vintage video game consoles',
  '90s-fads inspired merch',
  'Y2k wall-art and posters'
];

const RadioProduct = (props) => {
  const { favProduct, setFavProduct } = props;

  const handleProductChange = (event) => {
    setFavProduct(event.target.value);
  }
  return (
    <form className="food-wrapper">
      <p>What is your favorite product from UltraNostalgia?</p>
      {products.map((product) => (
        <label htmlFor="product" key={product} className="favorite-product">
          <input
            type="radio"
            name="favoriteProduct"
            className="product-button"
            value={product}
            onChange={handleProductChange}
            onChecked={favProduct === product}
            required />
          {product}
        </label>
      ))}
      <div className="icon-container">
      <img className="product-icon" src={Vinylimage} alt="vinyl"/>
      <img className="product-icon" src={Posterimage} alt="poster"/>
      <img className="product-icon" src={Fadsimage} alt="fads"/>
      <img className="product-icon" src={Consoleimage} alt="console"/>
      </div>
    </form>
  )
}

export default RadioProduct;