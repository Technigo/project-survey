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
                    value='Los Angeles'
                    onChange={onPlaceChange}
                    checked={place === 'Los Angeles'}
                    />
                 Los Angeles
                </div>

                <div>
                    <input
                    id='place'
                    type='radio'
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

           {/*  <button className='okButton'><a href='#'>OK</a></button> */}
            </div>
        </div>
    )
} 

export default Place;