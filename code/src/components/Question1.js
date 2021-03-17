import React from 'react';

const Question1 = (props) => {
    const {name, setName, next} = props;
    return (
       <>
           <form>
               Who is your favourite Games of Thrones character?
               <input
                type='text'
                onChange={event => setName(event.target.value)}
                value={name}
                />
            </form>
            <button onClick={next}>Next</button>
       </>
       );
    }

export default Question1;