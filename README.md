# Survey form with React

The project was to build a survey and the purpose of it was to practice working with React and hooks.


## The project

I had alot of fun with this project, I'm really enjoying working with React!

I started with creating components called "NameInput", "AnimalInput" and another one for a drop-down. As always, I didn't put any effort into planning the content at the beginning of the week, for me the code and getting started is what is important. So I had three random questions and I pretty quickly got the survey up and running and at that point I felt that I had to switch up the content a bit and also include some more questions and then I came up with the idea to make the form input components to templates and make them more reuseable. I made the input attributes, label texts and so on relative to what was sent to the component through props and now I could use the components for several questions by just passing through the props that I wanted when mounting them in the Survey component. 

I didn't like having several state variables, one for each question, so I found that I could implement one state variable containing all the question keys and values as an object. This made everything break and I sat for many hours trying to find what was causing this. Finally i found that the value I was passing as "questionName" through props, setting it as the name attribute in the inputs, didn't match the names (keys) in the state variable. This issue really made me understand the purpose of the name attribute on inputs.

If I would have had more time with this project I would have continued with the Progressbar component that I didn't finish or implement, I would have added some nice validation texts and indicators and I would have tried to make a slider input and checkboxes, which are harder to get in place.

I didn't achieve that many of the stretch goals this week but I am so happy with my work and this is definetely the project that I am the most proud of. It was a blast working on!


## View it live

You can view my survey live at https://practical-williams-b581cf.netlify.app/
