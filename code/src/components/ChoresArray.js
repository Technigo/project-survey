import React from 'react'

const ageGroups = ['0-18', '19-30', '30+']

const ChoresArray = ({ nextQuestion, onRadioChange, age }) => {
    return (
       <section className='wrap'>
           <div className='content-wrap choresArray'>
                <h1>First question with Radiobuttons</h1>
                <p>Having a day off means a bit of recovery to load up with new energy! What would you do on your free time?</p>
                <form>
                    Age Group:
                    {ageGroups.map(group => (
                        <label key={group} htmlFor='radio'>
                            <input
                                type='radio'
                                value={group}
                                onChange={onRadioChange}
                                checked={age === group}
                                id='radio'
                                name='radio'
                            />
                            {group}
                        </label>
                    ))} 
                </form>
                <button className='btn' onClick={nextQuestion}>See summary</button>
            </div>
       </section>
    )
}

export default ChoresArray;
