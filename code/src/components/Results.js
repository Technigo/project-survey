import React from 'react';
import { ResultOptions } from './ResultOptions';

const resultLogic = ({ region, flavor, season }) => {
  if (region === 'cool as a cucumber' && flavor === 'salty' && season === 'spring') {
    return (
      <ResultOptions dish="Roasted Asparagus" pic="./assets/asparagus.jpg" recipe="https://houseofnasheats.com/oven-roasted-asparagus-garlic-parmesan-lemon/" />
    )
  } else if (region === 'cool as a cucumber' && flavor === 'salty' && season === 'summer') {
    return (
      <ResultOptions dish="Corn on the Cob" pic="./assets/corn.jpg" recipe="https://houseofnasheats.com/the-best-boiled-corn-on-the-cob/" />
    )
  } else if (region === 'cool as a cucumber' && flavor === 'salty' && season === 'autumn') {
    return (
      <ResultOptions dish="Green Bean Cassarole" pic="./assets/greenbean.jpg" recipe="https://houseofnasheats.com/fresh-green-bean-casserole/" />
    )
  } else if (region === 'cool as a cucumber' && flavor === 'salty' && season === 'winter') {
    return (
      <ResultOptions dish="Cheesy Potato Cassarole" pic="./assets/cheesy.jpg" recipe="https://houseofnasheats.com/creamy-potluck-potatoes/" />
    )
  } else if (region === 'cool as a cucumber' && flavor === 'sweet' && season === 'spring') {
    return (
      <ResultOptions dish="Rhubarb Crisp" pic="./assets/rhubarb.jpg" recipe="https://houseofnasheats.com/rhubarb-crisp-recipe/" />
    )
  } else if (region === 'cool as a cucumber' && flavor === 'sweet' && season === 'summer') {
    return (
      <ResultOptions dish="Cherry Pie" pic="./assets/cherry.jpg" recipe="https://houseofnasheats.com/best-homemade-cherry-pie-recipe/" />
    )
  } else if (region === 'cool as a cucumber' && flavor === 'sweet' && season === 'autumn') {
    return (
      <ResultOptions dish="Pumpkin Pie" pic="./assets/pumpkin.jpg" recipe="https://houseofnasheats.com/pumpkin-pie-recipe/" />
    )
  } else if (region === 'cool as a cucumber' && flavor === 'sweet' && season === 'winter') {
    return (
      <ResultOptions dish="Apple Crisp" pic="./assets/apple.jpg" recipe="https://houseofnasheats.com/apple-crisp/" />
    )
  } else if (region === 'hot-headed' && flavor === 'salty' && season === 'spring') {
    return (
      <ResultOptions dish="Fried Green Tomatoes" pic="./assets/tomatoes.jpg" recipe="https://houseofnasheats.com/fried-green-tomatoes/" />
    )
  } else if (region === 'hot-headed' && flavor === 'salty' && season === 'summer') {
    return (
      <ResultOptions dish="Fried Pickles" pic="./assets/pickles.jpg" recipe="https://houseofnasheats.com/fried-pickles/" />
    )
  } else if (region === 'hot-headed' && flavor === 'salty' && season === 'autumn') {
    return (
      <ResultOptions dish="Fried Chicken" pic="./assets/chicken.jpg" recipe="https://houseofnasheats.com/southern-fried-chicken/" />
    )
  } else if (region === 'hot-headed' && flavor === 'salty' && season === 'winter') {
    return (
      <ResultOptions dish="Biscuits & Gravy" pic="./assets/biscuits.jpg" recipe="https://houseofnasheats.com/sausage-gravy-and-biscuits/" />
    )
  } else if (region === 'hot-headed' && flavor === 'sweet' && season === 'spring') {
    return (
      <ResultOptions dish="Banana Pudding" pic="./assets/banana.jpg" recipe="https://houseofnasheats.com/homemade-banana-pudding/" />
    )
  } else if (region === 'hot-headed' && flavor === 'sweet' && season === 'summer') {
    return (
      <ResultOptions dish="Peach Ice Cream" pic="./assets/peach.jpg" recipe="https://houseofnasheats.com/old-fashioned-fresh-peach-ice-cream/" />
    )
  } else if (region === 'hot-headed' && flavor === 'sweet' && season === 'autumn') {
    return (
      <ResultOptions dish="Sweet Potato Cassarole" pic="./assets/sweetpo.jpg" recipe="https://houseofnasheats.com/sweet-potato-casserole-with-marshmallows-and-pecans/" />
    )
  } else if (region === 'hot-headed' && flavor === 'sweet' && season === 'winter') {
    return (
      <ResultOptions dish="Pecan Pie" pic="./assets/pecan.jpg" recipe="https://houseofnasheats.com/classic-southern-pecan-pie/" />
    )
  } else {
    return (
      <p> Oops, you seem to have missed a question.</p>
    )
  }
}

export const Results = ({ region, flavor, season }) => {
  return (
    resultLogic({ region, flavor, season })
  )
}