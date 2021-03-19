import React from 'react';

const CharacterTextfield = ({name, setName, handleSubmit}) => {
    const onNameChange = (e) => {
        setName(e.target.value);
      };

    return (
       <>
           <form className='textfield-input-form'>
               <div className='textfield-button-container'>
                    <div>
                        <label tabIndex='0' htmlFor='name'>
                        <h2 className='question-heading'>Who is your favorite Game of Thrones character?</h2>
                            <input
                                type='text'
                                aria-label='Type your favorite Game of Thrones character'
                                onChange={onNameChange}
                                value={name}
                                name='name'
                                id='name'
                                placeholder = 'Type answer here...'
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <button onSubmit={handleSubmit}
                            className='button'
                            tabIndex='0'
                            aria-pressed='false'
                            aria-label='Next question'
                            type='submit'
                            > Next!
                        </button> 
                    </div>
                </div>
            </form>
       </>
       );
    }

export default CharacterTextfield;