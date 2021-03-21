# Survey form with React 🍣

I've built a multi step survey about sushi using React. 


## The problem

The main task was to build a survey form containing questions with different input types. When the user presses the submit button the form will disappear and a summary of the user's submission will be displayed. 

I did the form with multiple steps where each step represented a different page (the first page, the respective questions and the summary at the end). I first began to figure out the flow of the React components starting from App.js. I decided to make a Form component the main component and to simply mount the Form component in App.js. I then created components for the different steps. I decided to use as few React useState hooks as possible and declared them in the Form component so that I could access it all in one place (this made it easier to for example access the user's inputs for the summary). To only display one question at a time I used conditional rendering with a button to progress to the next question (and a previous button to move backwards). 

I also added HTML input validation attributes to the form and a function to access and check if the required attribute was true. If not, the user would get a message with a prompt on what to do. At the end I applied the styling. 

If I had more time, I would have added more questions with different input types (such as a range slider and a checkbox) and a progress bar to show the user how much of the form is left. Also, I would've wanted to show different questions depending on a answer to the specific question. I would have liked more time to do a more elaborate styling of the form and its input types as well, but given the time frame of the project's completion the styling wasn't a priority.


## Accessibility testing

Here's an overview of the testing I've done. 

- The page is responsive and tested on different devices accessible to me in Chrome Dev tools
- The page works on different browsers; Chrome, Edge and Firefox
- It's possible to navigate the page using only the keyboard (tab, arrows and enter)
- The page has been run through HTML validators; Lighthouse in Chrome Dev tools
- Ran an audit using WAVE (wave.webaim.org); the page received no errors or contrast errors
- The content of the page is still readable and understandable without the CSS; used the Google Chrome Web Developer tool to remove all the CSS
- The page has been tested with a screen reader, but with not so desireable results. After a bit of googling it seems like there's an issue with multi step forms with no easy solution to. As a quick fix I added some aria attributes in App.js to mitigate this a bit but it is still not the most optimal solution. If I had more time, I would have tried to solve this.


## View it live

For my live project, see this link: https://quizzical-nightingale-6208b3.netlify.app/ 
