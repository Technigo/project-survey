import React from 'react'

const WorkArea = ({ workArea, setWorkArea}) => {

    const onWorkAreaChange = (event) => {
        setWorkArea(event.target.value)
    }

    return (
        <div className='questionContainer two'>
            <div className='innerContainer'>
            <label htmlFor='workArea'>
                <h2 className='questionTitle'><i className="fas fa-arrow-circle-right"></i> Which work area are you interested in?</h2>
                <select
                    className='dropdownInput'
                    id='workArea'
                    name='workAreas'
                    onChange={onWorkAreaChange}
                    value={workArea}
                >
                    <option value=''>Select work area:</option>
                    <option value='frontend'>Frontend Development</option>
                    <option value='backend'>Backend Development</option>
                    <option value='fullstack'>Fullstack Development</option>
                </select>
            </label>

            <button className='okButton'><a href='#place' className='okButtonLink'>OK</a></button>
            </div>
        </div>

    )
} 

export default WorkArea;