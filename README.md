# Survey form with React

The task this week was to create a survey form using react. We had to collect user reponses using three separate types of form and then display them with help of the useState react hook.

## The problem

I created a 'section' React hook which updated every time the form was submitted, and used this to hide and reveal each new question, so that there was only ever one on the screen at any one time. I broke each question into its own component, and used props to to allow it to pass the user response to a final summary which would display what was entered into the forms. I created a 'progress bar' and set its width to a multiplication of the 'section' state (in this case (section * 33.3), since there were three sections). I used the same method to display a text which tells the user what level of completion they have reached. If I had more time I would liked to have styled it a little more cleanly, and created a better animation for the progress bar. I would also have liked to display custom messages depending on the user's response. 

## View it live

https://jovial-hermann-c0f8f4.netlify.com
