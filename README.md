# Survey form with React
Creating a survey in React. Using React state hooks + components and props for structure.
Conditional rendering based on if the form is submitted or not. Progress bar visualizing how much is left.

## The problem
Besides from useState hooks, this project is based on html form and required tags for validation combined with validation made in code (JS). Approached based on conditional rendering: if form is not submitted (i.e. usestate acts as a flag with boolean value), then render this (the form), else render this (the form response). Added progress bar from scratch and inline conditional rendering using ternary operator logic, for displaying buttons based on conditionals. Refactored code by collecting multiple state hooks values in one state hook by setting them as an object inside of it.
Next steps would be to make the components reusable for many different questions, e.g. in the input field component.

## View it live
Live demo: https://hungry-hermann-c6b3c3.netlify.app
