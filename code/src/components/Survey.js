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

    const onInputNameChanged = (e) => {
        setInputName(e.target.value);
        console.log(e.target.value);
    }
  
    const onRadioButtonChanged = (e) => {
        setEvaluation(e.target.value);
        console.log(e.target.value)
    }

    const onSelectChanged = (e) => {
        setSelectAnswer(e.target.value);
        console.log(e.target.value);
    }


    return (
        <>
            <main className="maincontainer">
                {!summary && (
                <form onSubmit={handleSubmit}>
                    <section>
                        <Input 
                            question={'Wanna tell me your name?'}
                            nameValue={inputName}
                            onInputNameChange={onInputNameChanged}
                        />
                    </section> 

                    <section> 
                    <p>Have you filled out this weeks evaluation yet?</p>
                    {evaluationArray.map((evaluation) =>
                        <Radio 
                            key={evaluation}
                            buttonValue={evaluation}
                            onRadioButtonChange={onRadioButtonChanged}
                        />
                    )}
                    </section>   

                    <section>
                        <Select 
                            question={'So how do you think Poya feels about getting your weekly evaluation?'}
                            onSelectChange={onSelectChanged}
                            selectValue={selectAnswer}
                        />
                    </section>

                    <div>
                        <button onSubmit = {handleSubmit} type="submit"> Submit </button>
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