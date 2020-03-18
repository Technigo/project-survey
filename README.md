# Nut survey

Survey form built with React, using the `useState` hook.

## The problem

I focused on making the components completely reusable, which was neccessary since I didn't decide on a concept for the survey until very late in the process. I created the following input components:

- Text input
- Radio buttons
- Select drop-down
- Checkbox

The form shows one input at a time, using state to keep count of the questions. This is also visually rendered to the user.

### If I had more time I would:
- Make the `questionsTotal` variable dynamically set
- Add a progress bar 
- Make the button disabled before a question is answered

## View it live

https://nut-survey.netlify.com/
