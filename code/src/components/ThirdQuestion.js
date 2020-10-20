import React from 'react'
import './thirdQuestion.css'

export const ThirdQuestion = () => {

    return (
        <div className="third-question">
            <form>
                <h1>How many hours of sleep have you had today?</h1>
                <h2>It is okay to feel you need a few hours more.</h2>
                <div className="radio-buttons">
                    <label>
                        <input
                            type="radio"
                            value="0-5hrs"
                            className="radio-button"
                        //   onChange={}
                        //   checked={}
                        />
                        <p>0-5 hours</p>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="5-8hrs"
                            className="radio-button"
                        //   onChange={}
                        //   checked={}
                        />
                        <p>5-8 hours</p>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value=">8hrs"
                            className="radio-button"
                        //   onChange={}
                        //   checked={}
                        />
                        <p> more than 8 hours</p>
                    </label>
                </div>
                <button>continue</button>
            </form>
        </div>
    )
}