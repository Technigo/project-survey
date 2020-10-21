import React from 'react'
import './fourthQuestion.css'

export const FourthQuestion = () => {

    return (
        <div className="fourth-question">
            <form>
                <h1>Choose one thing from the drop-down menu you'll do for yourself today</h1>
                <h2>Keep hydrated and acknowledge your thoughts and feelings</h2>
                <select
                    //   onChange={}
                    //   value={}
                    required
                >
                    <option value="heart">♡</option>
                    <option value="meditate">Meditate</option>
                    <option value="water">Drink more water</option>
                    <option value="walk">Go on a long walk</option>
                    <option value="journal">Journal your thoughts and feelings</option>
                    <option value="tea">Enjoy a cup of tea</option>
                    <option value="bath">Take a warm bath</option>
                </select>
                <button>Do this for you</button>

            </form>
        </div>
    )
}