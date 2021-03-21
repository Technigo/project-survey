import React from 'react'

const FirstPage = ({ word, setWord }) => {
    const onWordChanged = (e) => {
        setWord(e.target.value)
    }

    return (
        <section className="page-container">
            <header className="header-container">
                <h1>Post pandemic life</h1>
			    <h2>How are you going to remember your life in quarantine?</h2>
            </header>
			<div className="input-container">
            	<h3>Summarize your quarantine lifestyle with one word:</h3>
                <label htmlFor="word"></label>
                <input
                    name="word"
                    className="input"
                    type="text"
                    value={word}
                    onChange={onWordChanged}
                />      
            </div>
        </section>
    )
}

export default FirstPage