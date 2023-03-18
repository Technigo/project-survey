import React from 'react';
import './recap.css';

export const Recap = ({ starter, pasta, secondo, dessert }) => {
  const Choises = () => {
    if (starter === 'bruschetta') {
      starter = 'bruschetta'
    } else if (starter === 'tagliere') {
      starter = 'tagliere'
    } else {
      starter = 'snacks'
    }
    if (pasta === 'gnocchi') {
      pasta = 'gnocchi al pesto'
    } else if (pasta === 'seafood') {
      pasta = 'seafood pasta'
    } else {
      pasta = 'spaghetti al sugo'
    }
    if (secondo === 'cotoletta') {
      secondo = 'cotoletta'
    } else if (secondo === 'lamb') {
      secondo = 'lamb'
    } else if (secondo === 'meatballs') {
      secondo = 'meatballs'
    } else {
      secondo = 'parmigiana di melanzane'
    }
    if (dessert === 'tiramisu') {
      dessert = 'tiramisu'
    } else if (dessert === 'cake') {
      dessert = 'cake'
    } else {
      dessert = 'gelato'
    }
  }

  Choises();

  return (
    <div className="recap-container">
      <h1>Here is your menu:</h1>
      <h2>Starter: {starter} <br />
        Pasta: {pasta} <br />
        Secondo: {secondo} <br />
        Dessert: {dessert} <br />
        And of course, do not forget your espresso!
      </h2>
    </div>
  )
}