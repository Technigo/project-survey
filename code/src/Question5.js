import React from 'react'

const captions = [
    {number: 1, caption: 'A true friend is one soul in two bodies.'},
    {number: 2, caption: 'Pizza and you are all I need.'},
    {number: 3, caption: 'You drive me crazy, but I love it.'},
    {number: 4, caption: 'Life is better with true friends.'},
    {number: 5, caption: 'You give me the kind of feelings people write novels about.'},
    {number: 6, caption: 'If you were a vegetable, you’d be a cute-cumber.'},
    {number: 7, caption: 'You are my favorite notification.'}
]

export const Question5 = ({cheesyCaption, onCaptionChange}) => {
    return (
        <section className="caption section">
            <h2>Choose a caption</h2>
            <div className="captions-container">
                {captions.map(caption => {
                    return <p key={caption.caption}>{caption.number}: {caption.caption}</p>
                })}
            </div>

            <div className="captions-input-container" aria-label="captions" role="radiogroup">
                {captions.map(caption => {
                    return (                
                        <label 
                            htmlFor={caption.number} 
                            key={`Caption: ${caption.caption}`}
                        >
                                <input
                                    key={caption.number}
                                    name={caption.caption}
                                    type="radio"
                                    value={caption.caption}
                                    onChange={e => onCaptionChange(e.target.value)}
                                    checked={cheesyCaption === caption.caption}
                                    aria-checked={cheesyCaption === caption.caption}
                                />
                            {caption.number}
                        </label>
                    )
                })}
            </div>
        </section>
    )
}