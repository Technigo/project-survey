# Survey form with React 👻

The goal of this project is to practice React state and form fields by making a Typeform like product. I decided to build a survey imitating a cinema check-out experience asking the user to pick movies, seats, dates and snacks. 🍿🎬🎫

## What have I learned 💡

- I started sketching out my survey and decided to have one question per component and a Form component where I mount all the other components.
- Once I had created my questions I needed to connect them so that once a question had been answered, the next one was generated and so on. To do this I created a **useState** hook called setStep, which is passed as a **prop** into all the components and invoked when the user clicks on the Next Button.
- To store and set the answers I also created useStates' and functions for all the questions.
- Inside the Form component I then created a logic in the return that generates the questions in order, according to their number. Finally, in the Overview I pass all the stored answers giving the user an overview.
- In the overview, I also included a sound file that renders when the overview is shown.
- For styling I wanted to learn more about **animations** and included a text being typed in the intro page.
- Overall, it was a great project to practice useState-hooks and how to implement them.

## View it live

https://mt-dotse-scarymovie-survey.netlify.app/
