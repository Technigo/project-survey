# Survey form with React [View Live!](https://kind-joliot-6577b6.netlify.app/)

This week's project is to use React to build a survey form. My completed project consists of 4 questions that needs to be answered by users. When the user presses submit, they get to see a summary of their answers.

The focus here is to practice using React state and controlling forms, and at the end present a summary.

What I have learnt:

* What the purpose of state in React is.
* How to use the useState hook in React.
* How to connect HTML form inputs to state. 

## The process and structure

I started off by creating a main component which I now call Survey and that includes the form. Next step for me was to create three component to handle input text, radio button and a dropdown. In each of these componets I decided to keep the useState and printout what was stored in the variable.

I was calling these componets from the main component.

When that was done my next step was to move useState to the main component and send needed information to the components with props.

The main component was rendering information that had been changed via onChange within the different components.

At the end I created a button and summary component and added logic in main component what to render depending on submitted state.

Now when I had the skeleton it was time to do some styling and as usally this is something I struggle with. Decided to keep it clean!     


**Accessibility**

* Screen reader - Chromevox
* Lighthouse
* [https://wave.webaim.org/](https://validator.w3.org/)
* [https://validator.w3.org/](https://validator.w3.org/)

**Cross-browser**

* Chrome - Mac
* Firefox - Windows
* Edge - Windows
* iOS - iPone X (Safari)
* Android - Samsung S8 (Chrome)

### List of observations

**Screen reader - Chromevox**

* I think this is really tricky, a huge area to understnad how to do it in a good practice.
* I added some `tabIndex="0"` to get a better flow when using the tab-key. esLint is then complaning about `tabIndex` should only be declared on interactive elements.
* Issue with dropdown and when I go through the list, not read. 

**Lighthouse**

* Seems that I have quite high values, nice :-)
 
**validator.w3.org**

* No issues!

**https://wave.webaim.org/**

* I'm aware of that I have a bunch of contrast errors, at this point I haven't decided how I wanna fix them.

**General**

* Since I haven't added that much love for styling my dropdown or the range slider I realized when testing different browsers and devices that the default styling differs a lot

## View it live

Try it out [here](https://kind-joliot-6577b6.netlify.app/)
