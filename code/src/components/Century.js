import React from 'react'

const yearCentury = [ 
  '1533-1577', 
  '1755-1793',
  '1865-1810'
];
export const Century = ({ cenury, setCentury }) => {

    // const handleCenturyChange = (event) => {
    //     setCentury(event.target.value)
    // }

    return (

    <div className="century">
      <form>
In which century do you feel most comfortable?

        {yearCentury.map ((year) => (
          <lable key={year}>
            <input
              type="radio"
              value={year}
              onChange={event => setCentury(event.target.value)}
              checked={yearCentury === year} />
            {year}
          </lable>
        )) }
      </form>
    </div>
  )
}