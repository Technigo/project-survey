import React from "react";

const DropDown = ({ nextQuestion, onDropDownChange, actor }) => {
    return (
        <section className='wrap'>
            <div className='content-wrap dropdown'>
                <h1>To be or not to be?</h1>
                <p>Which actor or actress should candidate to be the next president in the USA?</p>
                <form className="radiobutton-form">
                    <label htmlFor='actor'>
                        <select
                            lang='en'
                            onChange={onDropDownChange}
                            value={actor}
                            id='actor'
                            name='actor'
                            className="select-size"
                        >
                            <option disabled value=''>Select artist:</option>
                            <option value='Silvester Stallone'>Silvester Stallone</option>
                            <option value='Denzel Washington'>Denzel Washington</option>
                            <option value='Oprah'>Oprah</option>
                            <option value='Reese Witherspoon'>Reese Witherspoon</option>
                        </select>
                    </label> 
                    <button 
                        type='button'
                        className='btn btn-next' 
                        disabled={actor === ""} 
                        onClick={nextQuestion}>Next question</button>
                </form>
            </div>
        </section>
    )
}

export default DropDown;
