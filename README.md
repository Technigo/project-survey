# Survey form with React

A project to build a Typeform like survey using React.

## The problem

I started this project with adding the components for the basics - meaning header, footer and 3 different questions - that I think would be needed and connecting them to the App.js and to their own css files. 
After that I added some default props and added different inputs to each question: textfield, radiobuttons and select. At first I made the form display on one page and added a button to jump down to the different questions using the React ref. I later changed this to have a question on each page (it should be typeform like after all) and added a button component to jump to  the next question section. This was acutally a easier aproach then my first using of Ref and scrollintoview as I instead only had to use logical opperators and a state saying which question should be shown. At first I was using a lot of active classes and not to much states and passing of states to components, but this I did change later as my first approach was not looking satisfying in a code perspective.

When I got everything working with event handlers, props and states I started styling and adding a theme to the questions. I then decided to also add some extra elements: a question with a range slider and a last question with checkboxes that depends on the answer of the second-to-last question.
This was probably the most difficult part for me - the checkboxes, or rather displaying the chekbox values in the summary. I really wanted it to be stored in an array so I could map them and display in the summary with specific signs between (, and &) depending on the length of the array. I had the right thinking but had trouble not getting duplicated answers displayed if the user checked a answer several times. My problem was that when I added the answers together in the array they got added as one long string which made the filtering not working properly. I first had a solutiong with adding it to a string with commas in between all, then doing split and then replace the commas where needed. Though, I did understand this was bad practice as you actually do .replace on a state (never do a change directly on a state!). 
So, when I got the knowledge of the ... (spread) operator I got a real "aha" moment and got my array filtering to work as a charm!

The progressbar was added and I used mostly css to make this work - implementing the questionnumber as a class added to the rangeslider class and depending on which questionnumber class the bar should show different precentage.
Last thing I did was changing the NextButton component (renaming to DirectionButton also) and adding another one as a Back button that toggles the previous question.

What took most of my time was structuring. Using specific components to toggle questions was a good solution for getting a better structure in my opinion. 
If I had to do it all again I probably would have looked at more expamples on how to structure it before starting and if I now hade more time I would look more into how to make it even closer to best practice React coding as well as do more thorough styling of checkboxes/radiobuttons.

To have reusablity I did: 
- components for toggling of questions instead of putting it directly in App.js
- having arrays defined as props for radiobutton and select options
- using same button component for Back and Next button
- having many differetn props and seperate css files

tools: VScode, npm, Stack Overflow, Slack, Google, GitHub, Netlify, bash, ESLint
techniques: JavaScript, React/JSX, CSS3, HTML5

## View it live

https://future-survey.netlify.app/
