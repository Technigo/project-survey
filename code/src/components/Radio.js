import React, {useState} from 'react'
import Image from './Image'

const ageGroups = ["0-18","19-30","30+"]

const Radio = () => {
    const [ageGroup, setageGroup] = useState();
    const images = ["./assets/jacket2.jpg","./assets/jacket3.jpg","./assets/jacket4.jpg"]
    const images2 = [0["./assets/jacket2.jpg"],1["./assets/jacket3.jpg"],2["./assets/jacket4.jpg"]]
    const ima = "./assets/jacket3.jpg"
    console.log(images)

    return (
        <label>
        <p>Age Group:</p>


        {ageGroups.map(group, => (
              <label key={group}>
                        <label >
              <Image GroupValue={group} className="teste" />
              </label>
              <input
                type="radio"
                value={group}
                onChange={event => setageGroup(event.target.value)}
                checked={ageGroup === group}
              />
              {group}
            </label>
      ))}
        </label>
    )
}

export default Radio