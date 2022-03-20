import React from "react";


const bookingFrequency = ['Once a week', 'Once a month', 'Twice a week', 'More than 2 times a week', '2-3 times a month', 'More than 2-3 times a month']

const QuestionThree = ({ questionNum, frequency, getBookingFrequency }) => {
    

    return <div className='question flex'>
        <label> {questionNum}. How often do you use our cleaning service ? </label>
        <select 
        onChange={e => getBookingFrequency(e.target.value)} 
        value={frequency}
        >
        {bookingFrequency.map(item => {
            return <option key={item} value={item}>{item}</option>
        })}
          </select>
    </div>
}

export default QuestionThree;