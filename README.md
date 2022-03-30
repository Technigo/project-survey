# Survey form with React

This project was done during the Technigo's Boot Camp (week 10 project). The goal was to practise to use React state and controlled forms my making a Typeform like product. The task was asking different questions from user by using different kind of ways (input, select, range slider etc) and then show the user's answers at the end. 

## The problem

I created open application form of fictive company, where I asked about user's work experience and contact information, and before submitting the application, user can see the summary of the answers and go back to change them if needed. 

I created React state for each step (= question number) and depending on what the step was, I then displayed different questions, which were each build in their own components (with needed props), like this: 

<form onSubmit={onFormSubmit}>
          {step === 0 && <StartingPage 
                            onStepChange={onStepChange}
                        />}
          {step === 1 &&  <NameQuestion   
                            step = {step}
                            nameInput={nameInput} 
                            onNameInputChange={onNameInputChange} 
                            onStepChange={onStepChange}
                        />}
          {step === 2 && <EmailQuestion 
                            step = {step}
                            emailInput={emailInput} 
                            onEmailInputChange={onEmailInputChange} 
                            onStepChange={onStepChange}
                            onStepBackChange={onStepBackChange}
                        />}
          {step === 3 && <PositionQuestion 
                            step = {step}
                            positionInput={positionInput}
                            onPositionInputChange={onPositionInputChange} 
                            onStepChange={onStepChange}
                            onStepBackChange={onStepBackChange}
                        />}
.......CHECK REST FROM THE CODE FOLDER
  
I build "next" and "back" buttons, which increases and decreases the step value by 1. 
  
With more time, I would have add more validation to the questions and set some kind of alert if the user have not answered for needed questions and tries to go to next question. Now that is controlled only by making some questions's 'next' buttons disabled if the user has nos provided any answer.  


## View it live
https://application-survey-react.netlify.app/

