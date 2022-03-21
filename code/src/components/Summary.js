import React from 'react¨';

const Summary = ({}) => {
return (
    <Section className='summary'>
    <h1>Summary for your choices</h1>
    <p>Your experience of working remotely: You have worked from {experienceChoice} earlier</p>
    <p>You would like to work from the office {chosenDay} days a week</p>
    <p>The best thing with working from home is: {bestChosen}</p>

    </Section>
)
}
export default Summary;