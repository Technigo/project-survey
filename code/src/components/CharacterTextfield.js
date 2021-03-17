import React from 'react';

const CharacterTextfield = (props) => {
    const {name, setName} = props;
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
       </>
       );
    }

export default CharacterTextfield;