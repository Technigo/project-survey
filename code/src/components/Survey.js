import React, {useState} from 'react'

import Input from 'components/Input';
import Radio from 'components/Radio';
import Select from 'components/Select';
import Summary from 'components/Summary';

const Survey = () => {

// states
    const [inputName, setInputName] = useState ('');
    const [evaluationAnswer, setEvaluationAnswer] = useState ('')
    const [selectValue, setSelectValue] = useState ('');
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
        setEvaluationAnswer(e.target.value);
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
                    {evaluationArray.map((evaluation) =>
                        <Radio 
                            onRadioButtonChange={onRadioButtonChanged}
                            key={evaluation}
                            value={evaluation}
                        />
                    )}
                    </section>   

                    <section>
                        <Select 
                            question={'So how do you think Poya feels about getting your weekly evaluation?'}
                            onSelectChange={onSelectChanged}
                            value={selectValue}
                        />
                    </section>

                    <div>
                        <button>Submit</button>
                    </div>
                </form>
        )}

        {(    
            <>   
            {summary &&
                <section>
                    <Summary 
                        value={inputName}
                        value={evaluationAnswer}
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