import React, { useState } from 'react';

import FormHeader from 'FormHeader';
import NameField from 'NameField';
import { ParticipanceField } from 'ParticipanceField';
import ThemeField from 'ThemeField';
import EmailField from 'EmailField';
import Submit from 'Submit';
import Summary from 'Summary';

const Form = () => {
    const [name, setName] = useState("");
    const [yesOrNo, setYesOrNo] = useState();
    const [theme, setTheme] = useState("");
    const [email, setEmail] = useState("");
    const [showSummary, setShowSummary] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setShowSummary(true);
    }


    return (
        <>
        {!showSummary ? (
        <form 
            className="form" 
            onSubmit={handleSubmit}
        >
            <FormHeader />
            <NameField name={name} setName={setName}/>
            <ParticipanceField yesOrNo={yesOrNo} setYesOrNo={setYesOrNo} />
            <ThemeField theme={theme} setTheme={setTheme} />
            <EmailField email={email} setEmail={setEmail} />
            <Submit />
        </form>
            ):(
            <section className="summary-container">
                <Summary name={name} email={email} theme={theme} />
            </section>
            )
        }
        </>
        )
    }

export default Form;