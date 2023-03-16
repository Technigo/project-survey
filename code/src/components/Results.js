import React from 'react';

const resultOptions = ({ region, flavor, season }) => {
  if (region === 'cool as a cucumber' && flavor === 'salty' && season === 'spring') {
    return (
      <>
        <h2>Results Page</h2>
        <p>Asparagus Quiche</p>
      </>
    )
  } else if (region === 'cool as a cucumber' && flavor === 'salty' && season === 'summer') {
    return (
      <>
        <h2>Results Page</h2>
        <p>Corn on the Cob</p>
      </>
    )
  } else if (region === 'cool as a cucumber' && flavor === 'salty' && season === 'autumn') {
    return (
      <>
        <h2>Results Page</h2>
        <p>Green Bean Cassarole</p>
      </>
    )
  } else if (region === 'cool as a cucumber' && flavor === 'salty' && season === 'winter') {
    return (
      <>
        <h2>Results Page</h2>
        <p>Cheesy Potato Cassarole</p>
      </>
    )
  } else if (region === 'cool as a cucumber' && flavor === 'sweet' && season === 'spring') {
    return (
      <>
        <h2>Results Page</h2>
        <p>Rhubarb Crisp</p>
      </>
    )
  } else if (region === 'cool as a cucumber' && flavor === 'sweet' && season === 'summer') {
    return (
      <>
        <h2>Results Page</h2>
        <p>Cherry Pie</p>
      </>
    )
  } else if (region === 'cool as a cucumber' && flavor === 'sweet' && season === 'autumn') {
    return (
      <>
        <h2>Results Page</h2>
        <p>Pumpkin Pie</p>
      </>
    )
  } else if (region === 'cool as a cucumber' && flavor === 'sweet' && season === 'winter') {
    return (
      <>
        <h2>Results Page</h2>
        <p>Apple Crisp</p>
      </>
    )
  } else if (region === 'hot-headed' && flavor === 'salty' && season === 'spring') {
    return (
      <>
        <h2>Results Page</h2>
        <p>Fried Green Tomatoes</p>
      </>
    )
  } else if (region === 'hot-headed' && flavor === 'salty' && season === 'summer') {
    return (
      <>
        <h2>Results Page</h2>
        <p>Fried Pickles</p>
      </>
    )
  } else if (region === 'hot-headed' && flavor === 'salty' && season === 'autumn') {
    return (
      <>
        <h2>Results Page</h2>
        <p>Fried Chicken</p>
      </>
    )
  } else if (region === 'hot-headed' && flavor === 'salty' && season === 'winter') {
    return (
      <>
        <h2>Results Page</h2>
        <p>Biscuits & Gravy</p>
      </>
    )
  } else if (region === 'hot-headed' && flavor === 'sweet' && season === 'spring') {
    return (
      <>
        <h2>Results Page</h2>
        <p>Sweet Grits Pie</p>
      </>
    )
  } else if (region === 'hot-headed' && flavor === 'sweet' && season === 'summer') {
    return (
      <>
        <h2>Results Page</h2>
        <p>Peach Ice Cream</p>
      </>
    )
  } else if (region === 'hot-headed' && flavor === 'sweet' && season === 'autumn') {
    return (
      <>
        <h2>Results Page</h2>
        <p>Sweet Potato Cassarole</p>
      </>
    )
  } else if (region === 'hot-headed' && flavor === 'sweet' && season === 'winter') {
    return (
      <>
        <h2>Results Page</h2>
        <p>Pecan Pie</p>
      </>
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