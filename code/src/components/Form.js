import React, { useState } from 'react';

import Introduction from 'components/Introduction';
import FormHeader from 'components/FormHeader';
import NameField from 'components/NameField';
import { ParticipanceField } from 'components/ParticipanceField';
import ThemeField from 'components/ThemeField';
import EmailField from 'components/EmailField';
import Submit from 'components/Submit';
import Summary from 'components/Summary';


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
                    <Introduction />
                    <FormHeader />
                    <NameField name={name} setName={setName}/>
                    <ParticipanceField yesOrNo={yesOrNo} setYesOrNo={setYesOrNo} />
                    <ThemeField theme={theme} setTheme={setTheme} />
                    <EmailField email={email} setEmail={setEmail} />
                    <Submit />
                </form>
                ):(
                <section className="summary-container">
                    <Summary name={name} email={email} theme={theme} answer={yesOrNo} />
                </section>
            )}
        </>
    )}

export default Form;