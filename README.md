
This is a project made during the Technigo Bootcamp. 

# Let's Connect! Job connect form.

The project was to create a controlled form using React and useState.
I did a form where you add your email and what job and office site you're interested in to connect with a company.

## The problem

I did one component for each question, as well as a welcome page and a summary and assembled them in App.js.
When pressing the buttons in the different sections you scroll down to the next section.
I did a function that validates the input and only shows the summary if everything is filled in.
When summary is showing you can't see the form.
To add props to the different components I used useState.

After the build was somewhat working I tried to .map() the radio button options and it worked but rendered one section per option.
I figure it has something to do with how the site is structured, but atm I didnt' have time to restructure.

After I was done I also tried to create a component with the OK button, which worked, and if I had more time I would restructure the site to have it look good, not only working. I also see where I could do this with other elements.

The site it tested for web accessibility (colors and semantics) and you can tab through it and the screen reader reads all the text.

## View it live

https://job-connect-form.netlify.app/
