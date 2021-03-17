import React from 'react';

const CharacterTextfield = (props) => {
    const {name, setName} = props;

    const onNameChange = (e) => {
        console.log(`Name: ${e.target.value}`);
        setName(e.target.value);
      };

    return (
       <>
           <form className="textfield-input-form">
               <h2 className="question-heading">Who is your favorite Game of Thrones character?</h2>
               <label htmlFor="name">
                <input
                    type='text'
                    onChange={onNameChange}
                    value={name}
                    id='name'
                    placeholder = 'Type answer here...'
                    required
                    />
                </label>
            </form>
       </>
       );
    }

export default CharacterTextfield;