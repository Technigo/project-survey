# Requirements

The Travel survey is a controlled form built with React using useState() hooks. The task was to have at least 3 questions that need to be answered by users. When the user presses submit, they should see a summary of their answers.

## Stretch goals
1. Add validation to your survey
2. Create a multi-step form
3. Visualize to the user how far through the survey they are, and how much is left, by creating a progress bar

## Approaching the problem

I used react useState hooks and conditional rendering to show one question at the time and collect the date from the user. The collected data summary is shown once the form is completed. 

Regex validation is used to make sure for text input.

To make sure the all questions of the form are answered the submit/next question buttons do not activate until a question is answered.

## See it live
Please see the project live: https://travel-survey-klimenko.netlify.app/

