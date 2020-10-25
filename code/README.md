# Build a survey project 📜
For this project we were tasked to build a survey using React and practice using React useState hook.
We had free reign to choose what our survey should be about, but we were asked to fill the basic requirements:
1. The survey should consist of at least 3 questions.
2. At least one question should consist of radio buttons and the select dropdown.
3. There should be a submit button, which when pressed should hide the form and reveal a summary of the data inputted by the user.
4. The site should follow accessibility guidelines. 

## What I achieved 🏵️
1. Used React to create different components and the useState hook to submit data inputted by the user which changes the variable state. 
2. Connect together using props data from the parent component, form.js, to the children components, all the form components and vice versa.
3. Used the pageSet useState and a comparison statement to set a welcome component, which when the button is pressed (state is made false) allows the user to enter the form and first component of the form.
4. Used the showFormQuestion state to show the form components in a specific order. This is done by setting the showFormQuestion to 0 and then setting the different form components to a specific number using an if statement in the form of &&. Then when the button is clicked in each form component, the onClick event is triggered ,incrementing the number that's in the showFormQuestion state by 1. This then invokes that form component, that's equal to that number, to be shown.   
5. Used ternary operators to make a comparison so when the summary is not true then the form is shown. When the summary state is changed to true, when the user clicks on the button, the onSubmit attribute and handleSubmit function is invoked and the summary component is made visible. At the same time as hiding the form component. 
6. Created 4 different input elements. However I would like to know how to get the text input so it wraps when the users types in the box. I tried using textarea tag rather than input, but this didn't seem to be as good a input box. 
7. I managed to get some of the accessibility to work. And I ended up using the fieldset and legend tags. This is because I read online that they help with accessibily.
8. I do however have a few issues with accessibility, which I want to fix. They are:
    1. The custom radio buttons and checkboxes aren't selectable despite using the arrows on the keyboard. 
    2. The button from the previous form component is outlined and read out, despite moving on the next component. 
    3. When moving to the next component I wan the legend tag be automatically selected, rather than the outlined button. 
7. Styled the page and made it responsive for mobile, tablet and desktop. 
8. I can't think of anything else right now, but will update when I remember!

## What tools 🛠️ I used:
1. NPM/Node.js
2. The React starter App that cam included in this project repo
3. Package.json
4. React, components and useState Hook
5. CSS
6. Very little HTML
7. Googaling, Technigo videos and lectures

## View it live 💻: 

