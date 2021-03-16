import React from 'react'

const WorkArea = ({ workArea, setWorkArea}) => {

    const onWorkAreaChange = (event) => {
        setWorkArea(event.target.value)
    }

    return (
        <div className='questionContainer two'>
            <div className='innerContainer'>
            <label htmlFor='workArea'>
                <h2 className='questionTitle'><i className="fas fa-arrow-circle-right"></i> What kind of role are you interested in?</h2>
                <select
                    className='dropdownInput'
                    id='workArea'
                    name='workAreas'
                    onChange={onWorkAreaChange}
                    value={workArea}
                    /* required */
                >
                    <option value=''>Select work area:</option>
                    <option value='frontend developer'>Frontend Developer</option>
                    <option value='backend developer'>Backend Developer</option>
                    <option value='fullstack developer'>Fullstack Developer</option>
                </select>
            </label>

            <button className='okButton'>
                <a href='#place' className='okButtonLink'>OK</a>
            </button>

            </div>
        </div>
    )
} 

export default WorkArea;