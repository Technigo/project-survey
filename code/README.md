# Survey: All About Jane (Austen)

## Goal: 
  * Using React to build a survey form for the first time. 
  * Using React Hooks
  * Connecting HTML form inputs to State.
  * Saving that information and displaying it at the end of the survey. 
  * There is no backend set up for this project... yet. ;)

## Tools/Libraries used:
  * React
  * Javascript
  * Styled Components
  * React-icons

## The problem/fixes

 I started the project by building the question components seperately. However I ran into my first problem
 when it came to applying the logic for the Answer submissions. I realised I needed to pass props
 from the main Survey document to the seperated components. Since I wasn't doing everything in one document, propers were necessisary. I then decided to make each question it's own form, then set up the logic to create an array for the question order in the main Survey document. 

 I also encountered one error with the radio buttons not logging their data in the submission form
 properly. I forgot to add a checked label to them with the prop equalling the value of the radio button.

 Overall I enjoyed this project and would like to continue improving upon it. 

 ## If I had more time ...
 * I'd like to add some animations to the question card changes. 
 * I'd also like to try out more input types like a slider or a progress bar.
 * I would add even more questions, some with image choices.

## View it live

https://all-about-jane-survey.netlify.app/



