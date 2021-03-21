# Survey form with React

This week's project was to use React to build a survey form.
The survey must contain at least 3 questions that need to be answered by users.
When the user presses submit they should se a summary of their answers. 

## The problem

I started of by reading all the material for this week and make a plan for what components i wanted to have.
I decided that i wanted my survey to be a one-pager but with a similiar design to typeform. 

I started off with the form component and basically finnishing one questions, one component, at a time. 
I used a basic input type text, select dropdown and radiobuttons with a submit button at the end. 

I found it quite easy to make all the components. I had a little bit of struggle to get the summary to show up at the end.
But I solved it with if condition - so if the form was not completed the form would show. If the form was completed it would, after the submit button, render the summary component. 

Once i got this to function smoothly I started with the styling. 
When i started to test the accessibility i got some alerts that the radio buttons would be an issue if they werent wrapped in a fieldset tag. 

If I would have more time I would do a multi-step form instead if a one-pager. 


## View it live

https://sneakers-for-the-win.netlify.app/