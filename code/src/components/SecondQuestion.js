import React from 'react'
import './secondQuestion.css'

export const SecondQuestion = () => {

    return (
        <section className="second-question" id="second">
            <form>
                <h1>What did, or could have made your day better?</h1>
                <h2>Every little thing counts!</h2>
                <input
                    className="better-day"
                    type="text"
                    placeholder="Be kind to yourself"
                    // value={this.state.value}
                    // onChange={this.handleChange}
                    required
                />
                <button>continue</button>
            </form>
        </section>
    )
}