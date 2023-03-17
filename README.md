# React Survey: What Dish Are You?

The goal of this project was to use State and React to create a short survey. The survey should have multiple different types of questions, and a summary printing out the user's answers. It could also have other features like validation, or be in a multistep format. 

## The problem

I started by sketching the logic for my survey - which really became a quiz - on paper. I made sure to include all of the basic requirements as well as any stretch goals that I was interested in including in the project. That way, when I started coding, I had fewer desicions to make in the moment. I then began to code each question in it's own component(s) without any styling.  Each time I built a new component, I made sure that the summary page was populating correctly.  Once I got to the last three questions - the most relevant to the "quiz", I also had to start developing the results pages. Once all of the content was there in draft form, I had to troubleshoot a few questions whose responses were not populating in the summary correctly.  Then, I started to introduce conditional rendering. Once the content was largely finished, I worked through my results pages more in depth. There are three components working together - one that holds the logic for which answer the user will recieve, one that formats the answer, and one that formats/returns the whole results page. Finally, I added some accessibility elements (albeit not a ton) and styled the whole survey.

If I had more time, I would keep working on understanding how to make this survey more accessible.

## View it live

Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
