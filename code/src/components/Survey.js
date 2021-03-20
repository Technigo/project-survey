import React, {useState} from 'react'

import Input from 'components/Input';
import Radio from 'components/Radio';
import Select from 'components/Select';
import Summary from 'components/Summary';

const Survey = () => {

// states
    const [inputName, setInputName] = useState ('');
    const [evaluation, setEvaluation] = useState ('')
    const [selectValue, setSelectValue] = useState ('');
    const [summary, setSummary] = useState(false)
// array

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
        setSelectValue(e.target.value);
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
                            value={inputName}
                            onInputNameChange={onInputNameChanged}
                        />
                    </section> 

                    <section> 
                    
                        <Radio 
                            key={evaluation}
                            value={evaluation}
                            onRadioButtonChange={onRadioButtonChanged}
                        />
                
                    </section>   

                    <section>
                        <Select 
                            question={'So how do you think Poya feels about getting your weekly evaluation?'}
                            onSelectChange={onSelectChanged}
                            value={selectValue}
                        />
                    </section>

                    <div>
                        <button
                            onSubmit = {handleSubmit}
                            type="submit">
                                Submit
                        </button>
                    </div>
                </form>
        )}

        {(    
            <>   
            {summary &&
                <section>
                    <Summary 
                        value={inputName}
                        value={evaluation}
                        value={selectValue}
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

/*
const isSurveyComplete = () => {
    if (inputName === ''){
        return false;
    }
    if (answerEvaluation === ''){
        return false;
    }
    if (thought === ''){
        return false;
    }
    return true;
};
    */