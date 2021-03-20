import React from 'react'

const Place = ({/*  place, id,  */setPlace }) => { 

    const onPlaceChange = (event) => {
        setPlace(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div className='questionContainer three'>
        <div className='innerContainer'>
        
            <h2 className='questionTitle' tabIndex='0'><i className="fas fa-arrow-circle-right"></i> In which one of our offices would you like to work?</h2>

            <div className='radioContainer'>
{/*                 <div>
                <input
                name='place'
                id={id}
                value={place}
                type='radio'
                onChange={onPlaceChange}
                />

                <label htmlFor={id}>{place}</label>
            </div> */}

            <div>
            <input
            name='place'
            id='la'
            value='Los Angeles'
            type='radio'
            onChange={onPlaceChange}
            />
            <label htmlFor='la' className='radioLabel'>Los Angeles</label>
            </div>

            <div>
            <input
            name='place'
            id='tokyo'
            value='Tokyo'
            type='radio'
            onChange={onPlaceChange}
            />
            <label htmlFor='tokyo' className='radioLabel'>Tokyo</label>
            </div>

            <div>
            <input
            name='place'
            id='stockholm'
            value='Stockholm'
            type='radio'
            onChange={onPlaceChange}
            />
            <label htmlFor='stockholm' className='radioLabel'>Stockholm</label>
            </div>

            <div>
            <input
            name='place'
            id='berlin'
            value='Berlin'
            type='radio'
            onChange={onPlaceChange}
            />
            <label htmlFor='berlin' className='radioLabel'>Berlin</label>
            </div>
 
        <input
        type='submit'
        className='submitButton'
        value='Submit your answers'>
        </input>
        </div>
    </div>
    </div>
    )
}

export default Place