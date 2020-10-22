import React, { useState } from "react";

import { NameQuestion } from "NameQuestion";
import { Welcome } from "./Welcome";

import  Radio from "./Radio";
import Select from "./Select";
import Summary from "./Summary";




const Survey = () => {
    const [section, setSection] = useState('welcome')
    const [name, setName] = useState('')
    const [ageGroup, setAgeGroup] = useState();
    const [fur, setFur] = useState('');


    const sectionOrder = [
        'welcome',
        'firstQuestion',
        'secondQuestion',
        'thirdQuestion',
        'summary',    
    ];
    
    const handleSubmit = event => {
        event.preventDefault();
        const nextSectionIndex = sectionOrder.indexOf(section);
        setSection(sectionOrder[nextSectionIndex+1]);   
      };

   //  </form>

    return (
    <>
    <section className ="wrapper-form"> 

   

        {section !== 'summary' ? (
            
            <form onSubmit={handleSubmit}>

            
        {section === 'welcome' && (   
             <Welcome
              /> 
             )}


             {section === 'firstQuestion' && (   
             <NameQuestion
              name={name} 
              setName={setName}/> 
             )}
  
        {section === 'secondQuestion' && (
            <Radio
             ageGroup={ageGroup}
             setAgeGroup={setAgeGroup}
            />
            )}
  
          {section === 'thirdQuestion' && (
            <Select 
            fur={fur}
            setFur={setFur} 
            />
          )}
            <button 
                tabIndex ='0'
                type='submit'
                aria-label='Next question'
                > Next!
            </button> 

            </form>
            
            ):(
                
            <div className='summary-container'>
                <Summary name={name} ageGroup={ageGroup} fur={fur}/>
            </div>
        )}
    </section>
   </>
)}


  export default Survey;

