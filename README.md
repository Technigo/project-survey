# Survey form with React

This project was to create a survey form in React with at least 3 questions.

## The problem

One of the problems was to only display the sixth question if the user answered "Yes" on the previous question, if not the Overview should be displayed. I made a function that handled the apperance of Overview, and then added an if/else-statement to change the onClick event.

Another major issue was the error when using emojis in the drop down menu, when using aria-labels the emoji did't display and if I didn't use it the page couldn't be uploaded on Netlify. Found a solution on Stack Overflow that you could use the emojis Unicode instead.

## View it live
