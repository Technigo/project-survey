# Survey form with React

A survey website made from React components which use the State hook to determine when and what to mount. A final page that captures and displays all the data added by the user.

## The problem
I started by thinking about which aspects of the site would be repeatable and should therefore have a seperate component, so I began with a question component which mounted a different input component depending on what the question input should be. Although this has meant that I can add and remove new questions fairly quickly without having to write new code, it does have the issue that the input types were harder to style depending on which question they were for. Given more time I would have a think about how to achieve this, maybe resturctuing the components, and maybe by passing down some specific information in the props to create a dynamic class-name or alternative.

https://wave.webaim.org/report#/https://sarah-mottram-survey.netlify.app/
more time - styled components package

## View it live

https://sarah-mottram-survey.netlify.app/
