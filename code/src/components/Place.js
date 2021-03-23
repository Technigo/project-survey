import React from 'react'

const Place = ({ place, setPlace }) => { 

    const onPlaceChange = (e) => {
        setPlace(e.target.value)
    }

    return (

        <div className='questionContainer three' id='place'>
            <div className='innerContainer'>
        
                <h2 className='questionTitle' tabIndex='0'><i className="fas fa-arrow-circle-right"></i> In which one of our offices would you like to work?</h2>

                <div className='radioContainer'>

                    <div>
                        <input
                            name={place}
                            id='la'
                            value='Los Angeles'
                            type='radio'
                            onChange={onPlaceChange}
                        />
                        <label htmlFor='la' className='radioLabel'>Los Angeles</label>
                    </div>

                    <div>
                        <input
                            name={place}
                            id='tokyo'
                            value='Tokyo'
                            type='radio'
                            onChange={onPlaceChange}
                        />
                        <label htmlFor='tokyo' className='radioLabel'>Tokyo</label>
                    </div>

                    <div>
                        <input
                            name={place}
                            id='stockholm'
                            value='Stockholm'
                            type='radio'
                            onChange={onPlaceChange}
                        />
                        <label htmlFor='stockholm' className='radioLabel'>Stockholm</label>
                    </div>

                    <div>
                        <input
                            name={place}
                            id='berlin'
                            value='Berlin'
                            type='radio'
                            onChange={onPlaceChange}
                        />
                        <label htmlFor='berlin' className='radioLabel'>Berlin</label>
                    </div>

                    <div className='submitButtonContainer'>
                        <input
                            type='submit'
                            className='submitButton'
                            value='Submit your answers'>
                        </input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Place