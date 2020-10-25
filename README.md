# Survey form with React

The project for this week was to practice state in React by building a survey/ controlled form using React. The survey was supposed to have at least three questions, and on submit hide the form and show a summary of the users answers. 

## The problem

I decided to do a form about plants 🌵. I started out with writing down the different state hooks I thought I would use, and started out with only one component (Form.js). I decided to build the entire form first, and then break it up in different components later. The input and select-question was quite easy to solve. The radio buttons was harder to grasp until I tried the solution with putting the plants in an array and map them, generating a lable and input for each of the array items. The state is also handled in my Form-component, and the components for the different questions are in turn imported into the form with props for name, number and favorite plant. 

I've learned a lot about the use of state and state hooks in this project, what state is and why we use it. I'm also very happy that we got a lot of practice in use of components and styling of forms. 

If I had more time I would've definetly added some more questions and built functionality for only showing one question at a time. I would also love to customize the summary-message depending on the answers from the user and styled the form much more than I've done now. 

## View it live

https://project-survey-favorite-plants.netlify.app/ 