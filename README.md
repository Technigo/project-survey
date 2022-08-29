# Weekly project for Technigo's bootcamp, week 10
Task: build a survey-like website

Tech: HTML, CSS, JavaScript, React

----

# Week 10: Survey form with React

This week's project was to practice React state hook and controlled forms by making a survey type product, including at least three questions and a summary displayed only when the form is submitted.

## The problem

I started by creating a basic structure with a landing page where a "next" button sends the user from one question to another. I then created a component for each type of input (radio buttons, text, etc.). When I was able to link everything together and had a working form displaying a summary at the end, I duplicated these components into all the questions for my concept idea. I created a RandomChoices component where an choice is calculated (with Math.random) for each non-answered question. The Summary component renders a short story using the choices made in the form, either the user's choices or ramdom choices.

I had some difficulties due to the ambitious concept that I chose to create, but at the end I was able to solve most of them or find some workaround until I learn more about React. If I had more time, I would have customised the radio buttons/checkboxes but it seemed a very minor styling detail that I decided to let go since it was still looking good with the minimalist design that I made.

All in all, I am very proud of what I was able to do with this second project using React and the first one with State hook.

## View it live

Project deployed here: [Story Factory](https://story-factory.netlify.app/)
