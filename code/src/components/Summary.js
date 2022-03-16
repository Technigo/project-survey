import React from 'react'

export const Summary = ({environmentInput, budgetInput, dayInput, travelInput}) => {
    return (
        <main className='summary-container'>

              <h3 className='question-number'>Question 1</h3> 
              <p>You prefer trips to the {environmentInput}</p>
            
              <h3 className='question-number'>Question 2</h3> 
              {budgetInput === '0-5000' &&(
                <p>You spend {budgetInput} on travels per year</p>
              )}
              {budgetInput === '5000-10.000' &&(
                <p>You spend {budgetInput} on travels per year</p>
              )}
              {budgetInput === '10.000-20.000' &&(
                <p>You spend {budgetInput} on travels per year</p>
              )}
              {budgetInput === 'More' &&(
                <p>You like to travel </p>
              )}
           
              <h3 className='question-number'>Question 3</h3> 
              {dayInput === '1-2 days' &&(
               <p>You like to go away for {dayInput} </p>
             )}
             {dayInput === 'A weekend' &&(
               <p> {dayInput} is perfect length for an environment change</p>
             )}
             {dayInput === '1-2 weeks' &&(
               <p>You prefer to go away for {dayInput}</p>
             )}
             {dayInput === '1 month or longer' &&(
               <p>You want to enjoy a vaccation for {dayInput} </p>
             )}

             <h3 className='question-number'>Question 4</h3>
             {travelInput &&(
               <p>You have a triped booked for this year</p>
             )}
          
           
        </main>
    )
}