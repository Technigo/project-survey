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
    return <div>
        <div className="form-container">

            <div className="form-wrapper">

                <form onSubmit={event => event.preventDefault()}>

                    <FormHeader />
                    <div>
                        <p>What's your name?</p>

                        <input className="name-input"
                            type="text"
                            onChange={event => setName(event.target.value)}
                            value={name}
                        />
                    </div>
                    <div>
                        <p>How did you find about Technigo Bootcamp?</p>

                        <select className="drop-down" onChange={event => setSocialMedia(event.target.value)}
                            checked={socialMedia === socialMedias}>

                            <option value="">Select one</option>

                            {socialMedias.map(item => (
                                <option key={item} value={item}>{item}</option>
                            )
                            )
                            }
                        </select>

                    </div>

                    <div>

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

                    <label>
                        <p> I want to receive newsletter</p>
                        <input
                            type="checkbox"
                            checked={wantsNewsletter}
                            onChange={event => setWantdNewsletter(event.target.checked)}
                        />
                    </label>
                    <button onClick={() => setSubmitted(true)}>SUBMIT</button>
                </form>
                {submitted && <Summary name={name} socialMedia={socialMedia} skills={skills} wantsNewsletter={wantsNewsletter} />}
            </div>
        </div>
    </div>
}

export default Form;