# Survey form with React

⚛This project's goal is to practice React state and controlled forms by making a Typeform like product:
Build a survey form using React which should consist of at least 3 questions - When pressing submit, the user should see a summary of their answers.
I've chosen a Digital Vacation theme 🌴, since traveling is so limited right now and we all need that sort of getaway. Users will get a dream vacation summary after answering some questions. ☀

## How I built it - What I learned
- I had a very ambitious idea since the beginning to make the survey dynamic, so that questions will appear after the user entered an answer and clicks on the Next button. This proved to be more complex than I expected, but I still gave it a go 💪. I started by separating the landing page, results page and questions into separate components.
- My first challenge was to connect the components so that, with the help of buttons and the onChange event handler, when one question is answered, then the next one is generated and so on, until reaching the final summary text. For this, I created a "visible" state using React's useState which will update when a question is answered and generate the next one.
- Components are having a local state which stores the anwers enetred by the user and this data is passed on as props to the FinalText component which then uses it to generate the summary text.
- At the end, the survey is working as I intended, but I would like to dig deeper into what are React's best practices, especially when using State and Props 👀

## Accessibility Testing
Another goal was to follow accessibility guidelines for this project, so here's an overview of the testing I've done:
- The page is responsive and tested on devices that were accessible to me (iPhone 6 Safari, iPad Safari).
- Works on different browsers: Chrome, Edge and Firefox - Possible to navigate the page using only the keyboard: combination of tab key and arrow keys to navigate the input forms and Enter key to press on buttons and move to the next step.
- HTML Validation: Used Lighthouse in Chrome Dev tools and also the axe - Web Accessibility Testing Chrome extension.
- Did a test using the Web Developer Chrome extension: Removed all CSS and site is still readable and understandable. ✨
- Ran an audit using Wave (wave.webaim.org): Good results on use of structural elements. Also made sure to have all alt text in place for images.
- Color contrast checked with the Elements inspector in Chrome Dev Tools.
- Screen Reader testing done with ChromeVox classic extension and also on iPhone Speak Screen feature: A bit tricky to get forms to be read properly. Had to implements some tabIndex attributes and aria-labels to improve readability.

## View it live

Craving for that dream getaway during these pressing corona times 😎, check out my Vacation Generator, live here: https://serene-engelbart-f399ff.netlify.app/
