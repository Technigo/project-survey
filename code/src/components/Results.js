import React from 'react';

const resultOptions = ({ region, flavor, season }) => {
  if (region === 'cool as a cucumber' && flavor === 'salty' && season === 'spring') {
    return (
      <p>Roasted Asparagus</p>
    )
  } else if (region === 'cool as a cucumber' && flavor === 'salty' && season === 'summer') {
    return (
      <p>Corn on the Cob</p>
    )
  } else if (region === 'cool as a cucumber' && flavor === 'salty' && season === 'autumn') {
    return (
      <p>Green Bean Cassarole</p>
    )
  } else if (region === 'cool as a cucumber' && flavor === 'salty' && season === 'winter') {
    return (
      <p>Cheesy Potato Cassarole</p>
    )
  } else if (region === 'cool as a cucumber' && flavor === 'sweet' && season === 'spring') {
    return (
      <p>Rhubarb Crisp</p>
    )
  } else if (region === 'cool as a cucumber' && flavor === 'sweet' && season === 'summer') {
    return (
      <p>Cherry Pie</p>
    )
  } else if (region === 'cool as a cucumber' && flavor === 'sweet' && season === 'autumn') {
    return (
      <p>Pumpkin Pie</p>
    )
  } else if (region === 'cool as a cucumber' && flavor === 'sweet' && season === 'winter') {
    return (
      <p>Apple Crisp</p>
    )
  } else if (region === 'hot-headed' && flavor === 'salty' && season === 'spring') {
    return (
      <p>Fried Green Tomatoes</p>
    )
  } else if (region === 'hot-headed' && flavor === 'salty' && season === 'summer') {
    return (
      <p>Fried Pickles</p>
    )
  } else if (region === 'hot-headed' && flavor === 'salty' && season === 'autumn') {
    return (
      <p>Fried Chicken</p>
    )
  } else if (region === 'hot-headed' && flavor === 'salty' && season === 'winter') {
    return (
      <p>Biscuits & Gravy</p>
    )
  } else if (region === 'hot-headed' && flavor === 'sweet' && season === 'spring') {
    return (
      <p>Banana Pudding</p>
    )
  } else if (region === 'hot-headed' && flavor === 'sweet' && season === 'summer') {
    return (
      <p>Peach Ice Cream</p>
    )
  } else if (region === 'hot-headed' && flavor === 'sweet' && season === 'autumn') {
    return (
      <p>Sweet Potato Cassarole</p>
    )
  } else if (region === 'hot-headed' && flavor === 'sweet' && season === 'winter') {
    return (
      <p>Pecan Pie</p>
    )
  } else {
    return (
      <p> Oops, you seem to have missed a question.</p>
    )
  }
}

export const Results = ({ region, flavor, season }) => {
  return (
    resultOptions({ region, flavor, season })
  )
}