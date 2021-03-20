import React from 'react'

const FirstPage = ({ word, setWord }) => {
    const onWordChanged = (e) => {
        setWord(e.target.value)
    }

    return (
        <section>
        	<header className="header">
				<div className="image-container">
					<img className="header-image" src="" alt=""/>
				</div>
				<div className="header-content">
					<h1>Post pandemic life!</h1>
					<h2>How are you celebrating life after quarantine?</h2>
				</div>
			</header>
			<div className="input-container">
            	<h3 className="input-title">Before starting the survey, write one word to summarize your year in quarantine:</h3>
                <div className="word-input">
                    <label htmlFor="word"></label>
                    <input
                        name="word"
                        type="text"
                        value={word}
                        onChange={onWordChanged}
                    />
                </div>       
            </div>
        </section>
    )
}

export default FirstPage