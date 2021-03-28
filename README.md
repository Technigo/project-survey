# Project react survey
The project was to use React to build a survey form. It should consist of at least three questions that need to be answered by users. When the user presses submit, they should see a summary of their answers.

# My survey
My survey consist of three questions with three different input-types. One textinput, one drop-down and one with radiobuttons. When the user press next-button the window scrolls down to the next question. When the user submit and have answered all the questions,the question-section will disappear and a summary will show.
If the questions is not answered when the user press submit, the window will scroll to the top.

# The process
I divided my form into a few different components. One for each part of the survey.
I think it might have been a bit easier if I would just have put all of the different inputs directly into app.js and not in separate files and import them. As a beginner it could maby have made it easier to get an overlook. But I wanted to get used to working with components that are in seperate files and practise in how to import/export and use props.
I did a map() over the radio-buttons and if I had more time I would have tried to move the map to the app.js file instead to make the component with the radiobuttons more easy to re-use.
Since the picture I chose for the mobile-version was not really a good fit for desktop, I decided to switch to a different one in media queries.

Things I'd like to add: A button to restart the survey. A button so you can chose to go back to the previous question. A progress-bar. Some more questions. More css.



# Tech used
HTML
CSS
JavaScript
React

# View the site live
https://book-survey-annsofi.netlify.app/