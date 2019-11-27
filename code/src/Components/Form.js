import React, { useState } from 'react'
import { FormHeader } from './FormHeader'
import { Summary } from './Summary'


const socialMedias = ["Facebook", "Instagram", "Linkedin", "Others"];
const programingSkills = ["HTML/CSS", "JavaScript", "Paython"];

const Form = () => {

    const [name, setName] = useState("");
    const [socialMedia, setSocialMedia] = useState("");
    const [skills, setSkills] = useState();
    const [wantsNewsletter, setWantdNewsletter] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handelSubmit = (event) => {
        event.preventDefault()
        setSubmitted(true)

    }

    return (

        <div>
            <FormHeader />

            <div className="form-container">
                {/* display:none, on the form */}
                {!submitted && (
                    <form onSubmit={handelSubmit}>


                        <div className="q-one">

                            <p>What's your name?</p>

                            <input className="input-name"
                                type="text"
                                onChange={event => setName(event.target.value)}
                                value={name}
                            />
                        </div>

                        <div className="q-two">

                            <p>How did you find about Technigo Bootcamp?</p>

                            <select className="drop-down" onChange={event => setSocialMedia(event.target.value)}
                                checked={socialMedia === socialMedias}>

                                <option value="">No Selection</option>

                                {socialMedias.map(item => (
                                    <option key={item} value={item}>{item}</option>
                                )
                                )
                                }
                            </select>
                        </div>

                        <div className="q-three">
                            <p>Experience in programming?</p>

                            {programingSkills.map(skill => (

                                <label key={skill}>

                                    <input className="radio-circle"
                                        type="radio"
                                        value={skill}
                                        onChange={event => setSkills(event.target.value)}
                                        checked={skills === skill}
                                    />
                                    {skill}
                                </label>
                            )
                            )
                            }
                        </div>
                        <div className="q-four">
                            <label>
                                <div className="checkbox-div">
                                    <input
                                        type="checkbox"
                                        checked={wantsNewsletter}
                                        onChange={event => setWantdNewsletter(event.target.checked)}
                                    />
                                    I want to receive newsletter
                            </div>
                            </label>
                        </div>
                        <div>
                            <button className="submit-btn">SUBMIT</button>
                        </div>
                    </form>
                )}
                <div className="sammary-div">
                    {submitted && <Summary name={name} socialMedia={socialMedia} skills={skills} wantsNewsletter={wantsNewsletter} />}
                </div>
            </div>
        </div>

    )
}

export default Form;