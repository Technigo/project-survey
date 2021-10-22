# Survey form with React

In this project I have created a survey about my my profile page (www.nehrwein.com) which I started building two weeks ago. With this survey I am practicing React state and controlled forms by making a Typeform like product. My portfolio-survey consists of 7 questions (6 default & 1 bonus) that need to be answered by users. In the end, the users gets presented a summary of their answers.

## The problem

I started with thinking about a subject for this survey and decided to do it about my recently build portfolio-page as I am interested in getting feedback. Nevertheless the survey is not connected to a database right now and so I can't read the answers, because I don't know yet, how to do the connection. But this will be an interesting future add-on. 

For the technical part, I divided the different parts that build up this project in react components. I created 4 seperate components for each input type, I use in the questions (text fields, radio buttons, select dropdown and range slider) with corresponding css-files. And I have 5 question-components, plus 1 bonus-question (MoretoAdd.js) that I am using at two different points in my survey. 

I understood and practiced in this survey how to reuse components in different parts of my survey. Now that I am finished, I realize that there is even more possibilities to profit of this concept and I will apply that knowledge to my next React-projects.

Apart from the above, I learned by building the survey:
- What the purpose of state in React is.
- How to use the `useState` hook in React.
- How to connect HTML form inputs to state.
- How to use form fields with React
- How to use state to show different components based on where I am in the survey

## View it live

Fill out the Portfolio survey here: https://nehrwein-portfolio-survey.netlify.app/
