import React from 'react'

const Place = ({ place, setPlace }) => {

    const onPlaceChange = (event) => {
        setPlace(event.target.value)
    }

    return (
        <div className='questionContainer three'>
            <div className='innerContainer'>
            <label htmlFor='place'>
                <h2 className='questionTitle'><i className="fas fa-arrow-circle-right"></i> In which one of our offices would you like to work?</h2>

                <div className='radioContainer'>
                <div>
                    <input
                    id='place'
                    type='radio'
                    name='place'
                    value='Los Angeles'
                    onChange={onPlaceChange}
                    checked={place === 'Los Angeles'}
                    /* required */
                    />
                 Los Angeles
                </div>

                <div>
                    <input
                    id='place'
                    type='radio'
                    name='place'
                    value='Tokyo'
                    onChange={onPlaceChange}
                    checked={place === 'Tokyo'}
                    />
                 Tokyo
                </div>

                <div>
                    <input
                    id='place'
                    type='radio'
                    name='place'
                    value='Stockholm'
                    onChange={onPlaceChange}
                    checked={place === 'Stockholm'}
                    />
                 Stockholm
                </div>

                <div>
                    <input
                    id='place'
                    type='radio'
                    value='Berlin'
                    onChange={onPlaceChange}
                    checked={place === 'Berlin'}
                    />
                Berlin
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