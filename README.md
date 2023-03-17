# Survey form with React

The task was to create a survey in React using components, props and functions. The user was going to enter information that should be saved and at the end of the survey. 

## The problem

I started by mapping out what components I was going to need for the project. I decided to do a story that present a story that contained some information of the user entered in the survey. 

I created the necessary components and then I put a lot of time into figuring out how to place the "Next"-button. I tried a solution where I would have the button be visible all of the time in App.js. I also wanted to add "required" to the button but I couldn't do that without the form element wrapping the button AND the submit-function attached to the button. So I decided to instead disable the button if the user had not entered any information. However, I had to give a condition to why it would be disabled and as long as I had the button placed in App.js I could not enter several conditions. (Maybe there is a way, but I didn't have enough time to figure it out.) Instead I placed the buttons in each compontent passing the handleStepIncrease-function to each of them. That way it was still able to keep track of all the steps. 

I was able to add event-handeler so that the user can press Enter after he/she has entered information in the text-fields. 

I also added a progressbar and was able to style it after some googling. 

I decided to add some image credits in the last component. 

I also wanted to make the user's input bold in the last component (where the story is presented) but I couldn't figure it out. If I had more time, that would be something that I would like to add. 

## View it live

https://lovely-sprinkles-d1c505.netlify.app
