import React from "react";

const DropDown = ({ nextQuestion, onDropDownChange, actor }) => {
    return (
        <section className='wrap'>
            <div className='content-wrap dropdown'>
                <h1>To be or not to be?</h1>
                <p>Which actor or actress should candidate to be the next president in the USA?</p>
                <form>
                    <label htmlFor='actor'>
                    <select
                        onChange={onDropDownChange}
                        value={actor}
                        id='actor'
                        name='actor'
                    >
                        <option disabled value=''>Select artist:</option>
                        <option value='Silvester Stallone'>Silvester Stallone</option>
                        <option value='Denzel Washington'>Denzel Washington</option>
                        <option value='Oprah'>Oprah</option>
                        <option value='Reese Witherspoon'>Reese Witherspoon</option>
                    </select>
                    </label> 
                </form>
                <button className='btn' onClick={nextQuestion}>Click to go on</button>
            </div>
        </section>
    )
}

export default DropDown;
