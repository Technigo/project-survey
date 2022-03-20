# Survey form with React

This week I did a form in React where you select between different inputs to write the start of a short ghost story. 
The form has an input field for typing a username, two select dropdowns, radio buttons and two number fields.
When clicking on the "Reveal ghost story"-button we move to another page where the story/summary is composed based on the chosen inputs.  

Regarding accessability I did this: 
- used semantic HTML tags
- tab:ed/arrow:ed/enter:ed through the page (the radio buttons work if you use arrows also on Crome and Edge, but not on Firefox)
- thought about contrast regarding colours 
- cross-browser-tested (Crome, Firefox and Edge)
- used < span > and aria-labels on emojis
- ran the site through https://validator.w3.org/ 
- and https://wave.webaim.org/ which spotted a label I named wrong so I could correct it

## The problem
Since it was new for this week I had issues with connecting the props from the components and the state in Form.js and still do and I am grateful my team helped med here. I also struggled a bit with making the form change to a new page for the summary but solved it by moving the Reveal-button to a component file instead. 
I also wasted some time on moving the background image around with background-position-x and-y to avoid the white text on the white moon (I learned that rem worked when % did not for this occation), and to my surprise the deployed version looked a lot different than when I used the localhost and inspect tools in crome for tablet and especially on desktop mode, and I did not have the time to fix the issue for desktop mode unfortunately.
If I had more time I would fix that issue. 
I would also really like to add conditonal rendering to make the questions disappear when clicked to add on the spooky feeling, which was why I kept the questions on one page. 
And I would also add required to the fields so they are not left empty. 

## View it live

https://ghost-story-form.netlify.app/
