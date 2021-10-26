import React from "react"
import EmailForm from "./EmailForm"

const Overview = ({ nameInput, ageInput, noOfConfession, noOfBadThings, badSin, finalConfession }) => {
    return (
        <>
        <section className="container">
        <div>
            <h2>{nameInput}, this is {noOfConfession === 'yes' ? 'your first confession.' : `not the first time you've come to a confession room.`}</h2>
            <p>According to what you've just told me, you are between the age of {ageInput} and this is {noOfBadThings === 'first' ? `the first bad thing you've done so far in your life. Not bad! Don't be too hard on yourself. We all make mistakes.` : noOfBadThings === 'couple' ? `not the first bad thing you've done in your life. And that's part of life, you know. Try and fail, and try again! Don't beat yourself up too bad. ` : noOfBadThings === 'plenty' ? `just one of many bad things you've done in your life. I can't say that I'm better than you. We all have our own shit to deal with. Just remember to check yourself before you wreck yourself.` : `just a piss in the ocean compared to all the bad stuff you've done in your life. Ouch. Maybe you need to come here a little more often?`}</p>
            </div>
            <div>
            <p>You consider this sin to be worth {badSin}.</p>
            <p>Based on the number of bad things you've done throughout your lifetime, I think you should {noOfBadThings === 'first' ? 'skip the HMs and instead ask yourself: is this really something worth bashing myself for?' : noOfBadThings === 'couple' ? `say at least two HMs, if you feel like it. Or don't. Thereafter you should look yourself in the mirror and tell yourself that it's alright.` : noOfBadThings === 'plenty' ? 'say at least 56 HMS and 4 Our Father. Or skip the father-thingy and ask yourself; "why do I keep getting myself into trouble? What can I do to change this behaviour?"' : `consider the implications of what you have done. Sounds like you're making life harder than it needs to be.`}</p>
            <h3>This is your confession:</h3>
            <p className="finalConfession">{finalConfession}</p>
            </div>
        </section>
        <section className="container">
            <div>
                <h1>Send your confession?</h1>
                <p>Would you like to send your confession in order to get it off your chest?</p> 
                <p>You can of course choose to send it anonymously.</p>
            <EmailForm />
            </div>
        </section>
        </>
    )
}


export default Overview