# Survey form with React - VR Games Night! 👾

This project goal was to use React ⚛ to build a survey form, it should consist of at least 3 questions that need to be answered by the user and when they press "submit" it should display a summary of their answers. 
This form is meant to help you plan the perfect games night 🎮 by gathering some info about the user preferences, for example, your friends! They're able to inout their name, choose the game they want to play and even some drink and food preferences! 🍽


## Planning & What I learned 🧩

I knew from the very beginning that I wanted it to be a multi step form, very much like typeform so the user would reply to a question and then press next to jump to the next question but my main focus was to make all the components and make sure everything worked as it should before advancing to the multi step form. 

- I learned how to useState and to "connect" the components between each other, I have all the states in the "parent" component and  I've deconstructed "props" so I pass only the values concerning that child component and then that data is used to be passed on to the summary component, where all the answers are displayed.

- Making it multiform was a challenge but a super fun one, I always had this idea if it was possible to make it multistep but only rendering sections/components and having only one button ( instead of a button in each component) so I achieved this by having all my components in an array and made use of the "indexOf" method, "state" and conditional rendering to the user can advance in the form. 

- The summary displays the user's answers, as well as, an image with the game they picked and I achieved this by using a switch statement in the summary component! 

## Accessibility testing 🚦

- Accessibility testing Lighthouse in Chrome Dev Tools and screen reader with ChromeVox chrome extension and Iphone voice over. 
    Score: 100% accessibility in lighthouse.
- Auditing Performed an audit using Wave (wave.webaim.org): No errors detected.

## Tech ⚡️

- HTML
- JSX
- React
- Javascript

View it live 🔴
https://vrgamesnight.netlify.app/


