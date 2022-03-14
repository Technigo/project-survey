import React from 'react'

export const FirstQuestion = () => {
    return (
        <main className='main-container'>
            <form className='form-container'>
                <label className='question-title'>
                    <h3>What are you looking for?</h3>
                </label>
                <select>
                    <option>
                        Select type of trip
                    </option>
                    <option>
                        City
                    </option>
                    <option>
                        Nature
                    </option>
                    <option>
                        Beach
                    </option>
                </select>
            </form>
        </main>
    )
}