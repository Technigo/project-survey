import React, {useState} from 'react'

import Input from 'components/Input';
import Radio from 'components/Radio';
import Select from 'components/Select';
import Summary from 'components/Summary';

const Survey = () => {

// states
    const [inputName, setInputName] = useState ('');
    const [evaluation, setEvaluation] = useState ('')
    const [selectAnswer, setSelectAnswer] = useState ('');
    const [summary, setSummary] = useState(false)
// array
const evaluationArray = ['yes', 'no', 'none of your business']

// functions
    const handleSubmit = (e) => {
        e.preventDefault();
        setSummary(true)
    }

    const onInputNameChanged = (e) => {setInputName(e.target.value)}
    const onRadioButtonChanged = (e) => {setEvaluation(e.target.value)}
    const onSelectChanged = (e) => {setSelectAnswer(e.target.value)}


    return (
        <>
            <main className="maincontainer">
                <h1 className="maintitle">weekly evaluation form / reminder</h1>
                    {!summary && (
                        <form onSubmit={handleSubmit}>
                            <section className="questioncontainer">
                                <p>Wanna tell me your name?</p>
                                    <Input 
                                        nameValue={inputName}
                                        onInputNameChange={onInputNameChanged}
                                    />
                            </section> 

                            <section className="questioncontainer"> 
                                <div className="buttoncontainer">
                                    <p>Have you filled out this weeks evaluation yet?</p>
                                        {evaluationArray.map((evaluation) =>
                                        <Radio 
                                            key={evaluation}
                                            buttonValue={evaluation}
                                            onRadioButtonChange={onRadioButtonChanged}
                                        />
                                    )}
                                </div>
                            </section>   

                            <section className="questioncontainer">
                                <p>How do you think would Poya feel about getting your weekly evaluation?</p>

                                    <Select 
                                        onSelectChange={onSelectChanged}
                                        selectValue={selectAnswer}
                                    />
                            </section>

                            <div className="questioncontainer">
                                <div className="submitbutton">
                                    <button onSubmit = {handleSubmit} type="submit"> Submit </button>
                                </div>
                            </div>
                        </form>
            )}

            {(    
                <>   
                {summary &&
                    <section>
                        <Summary 
                            nameValue={inputName}
                            selectValue={selectAnswer}
                            buttonValue={evaluation}
                        />
                    </section>
                }
    </>
            )}
            </main>
        </>
    )
}


export default Survey;