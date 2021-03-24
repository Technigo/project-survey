import React from 'react'

const WorkArea = ({ workArea, setWorkArea }) => {

    const onWorkAreaChange = (e) => {
        setWorkArea(e.target.value)
    }

    return (

        <div className='questionContainer two' id='workArea'>
            <div className='innerContainer'>
            
                <h2 className='questionTitle' tabIndex='0'><i className="fas fa-arrow-circle-right"></i> What kind of role are you interested in?</h2>
                
                <label htmlFor='workArea'>
                <select
                className='dropdownInput'
                id='workArea'
                onChange={onWorkAreaChange}
                value={workArea}
                >

                    <option value=''>Select work area:</option>
                    <option value='frontend developer'>Frontend Developer</option>
                    <option value='backend developer'>Backend Developer</option>
                    <option value='fullstack developer'>Fullstack Developer</option>
                </select>

                </label>

                <button
                className='okButton'
                type='button'
                onClick={(e) =>{
                    if (workArea) {
                    e.preventDefault();
                    window.location.href='#place'
                    } else {
                        window.alert('Please choose what kind of job you\'re interested in.')
                    }
                }}>OK
                </button>

            </div>
        </div>
    )
} 

export default WorkArea