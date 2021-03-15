import React, {useState} from 'react'

const Place = ({ place, setPlace }) => {

    const onPlaceChange = (event) => {
        setPlace(event.target.value)
    }

    return (
        <div className='questionContainer three'>
            <label>
                <h2 className='questionTitle'>Where would you like to work?</h2>

                <div className='radio-container'>
                <div>
                    <input
                    type='radio'
                    value='Los Angeles'
                    onChange={onPlaceChange}
                    checked={place === 'Los Angeles'}
                    />
                Los Angeles
                </div>

                <div>
                    <input
                    type='radio'
                    value='Tokyo'
                    onChange={onPlaceChange}
                    checked={place === 'Tokyo'}
                    />
                Tokyo
                </div>

                <div>
                    <input
                    type='radio'
                    value='Stockholm'
                    onChange={onPlaceChange}
                    checked={place === 'Stockholm'}
                    />
                Stockholm
                </div>

                <div>
                    <input
                    type='radio'
                    value='Remote'
                    onChange={onPlaceChange}
                    checked={place === 'Remote'}
                    />
                Remote
                </div>
                </div>

            </label>

            <button className='okButton'><a href='#'>OK</a></button>

        </div>
    )
} 

export default Place;