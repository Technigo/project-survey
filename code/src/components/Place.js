import React from 'react'

const Place = ({ place, setPlace }) => {

    const onPlaceChange = (event) => {
        setPlace(event.target.value)
    }

    return (
        <div className='questionContainer three'>
            <div className='innerContainer'>
            <label htmlFor='place'>
                <h2 className='questionTitle' tabIndex='0'><i className="fas fa-arrow-circle-right"></i> In which one of our offices would you like to work?</h2>

                <div className='radioContainer'>
                <div>
                    <input
                    id='place'
                    type='radio'
                    className='place'
                    value='Los Angeles'
                    onChange={onPlaceChange}
                    checked={place === 'Los Angeles'}
                    /* required */
                    />
                 &nbsp;Los Angeles
                </div>

                <div>
                    <input
                    id='place'
                    type='radio'
                    className='place'
                    value='Tokyo'
                    onChange={onPlaceChange}
                    checked={place === 'Tokyo'}
                    />
                 &nbsp;Tokyo
                </div>

                <div>
                    <input
                    id='place'
                    type='radio'
                    className='place'
                    value='Stockholm'
                    onChange={onPlaceChange}
                    checked={place === 'Stockholm'}
                    />
                 &nbsp;Stockholm
                </div>

                <div>
                    <input
                    id='place'
                    type='radio'
                    className='place'
                    value='Berlin'
                    onChange={onPlaceChange}
                    checked={place === 'Berlin'}
                    />
                &nbsp;Berlin
                </div>
                </div>

            </label>

            <input
            type='submit'
            className='submitButton'
            value='Submit your answers'>  
            </input>
            </div>
        </div>
    )
} 

export default Place;