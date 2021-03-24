# Survey form with React

https://survey-kitten.netlify.app/

The assignment was to create a "Typeform-style" multi-step form with react using functional components and useState. 

## The problem

I started by making the questions appear all at the same time, once i got that working, i divided the questions into hard coded separate components, after that i made a Typeform-inspired Figma (https://www.figma.com/file/WBMAi5rbzlTSWTpvqD5uMU/survey?node-id=0%3A1) and added css styling. After i got that in place i was quite happy with the project, and decided to try to make it even more abstract, so i replaced the hard coded question components with a generic "question rendering" component. Using that, i could keep all the information on the questions in a variable so it would be easy to add new questions just by changing that data. After that was working i wanted to take it even further and started building an interface for adding your own questions. I got pretty far but at this point i think i hit the roof of how much abstraction and complexity my brain could handle, so i didn't manage to complete it in time for the deadline. I hope to finish it later.

The main problems that i still have to work out are:

1 - when you create a question with answer options (like a select, radiobuttons, or checkboxes) - those values need to be stored as an array. The user types the different options in as comma separated text. I have figured out how to turn that string into an array, but the problem is inserting it back into the questions variable. I'm still not friends with the spread operator :) --check!

2 - when all the user-created questions are done and stored in the userQuestions array of objects, i need to create a sort of "container" object (state object "values") where the responses can later be stored. For each user created question, the "inputId" value should become a key in the "values" object. I don't know how to do that, and also i'm not sure it is the right approach. --check!

This function is disabled at the moment (commented out in Form.js 150-153 and 166-174, and the component itself is CreateQuestions.js

And then there are a few other kinks too. 

Overall i'm very happy with the project, i feel like i gave it my best shot and it was fun. I ran into a lot of bumps, and learned a LOT. I'm excited to learn Redux now that i know what a hassle it is sending around state variables back and forth. And for the next react project i should be able to make smarter decisions on how to do structure better from the beginning. 

## View it live

https://survey-kitten.netlify.app/



### todo
validate options values - check!
css bug

