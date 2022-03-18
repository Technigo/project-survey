import React, {useState} from 'react';

import QuestionName from './QuestionName';
import QuestionOptions from './QuestionOptions';
import Summary from './Summary';

// useState

const Survey = () => {
    const [nameInput, setNameInput] = useState('');
    const [location, setLocation] = useState('');
    const [next, setNext] = useState(1);


// events

    const handleNameInputChange = (event) => {
        setNameInput(event.target.value)
    }

    const handleLocationChange = (location) => {
      setLocation(location)
    }

    const handleNextChange = () => {
      setNext(next + 1)
    }


    return (
        <>
    
        <section className='Survey'>
          
          {next === 1 && (
              <QuestionName 
                  onChange={handleNameInputChange}
                  onNextChange={handleNextChange}
              />
          )}

          {next === 2 && (
              <QuestionOptions 
                  onChange={handleLocationChange}
                  onLocationChange={handleLocationChange}
                  onNextChange={handleNextChange}
              />
          )}

          {next === 3 && (
              <Summary 
                  nameInput={nameInput} 
                  location={location} 
              />
          )}
          
        </section>

    </>
  )
}

export default Survey




/* <div>
<QuestionSurprice 
wantsSurprice={wantsSurprice}
onChange={onSurpriceChange}
/>
</div>  */