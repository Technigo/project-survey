import React, {useState} from "react";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import FourthQuestion from "./FourthQuestion"
import Overview from "./Overview";

const Form = () => {
    const [question, setQuestion] = useState(1)
    const [alias, setAlias] = useState('')
    const [weapon, setWeapon] = useState('')
    const [companion, setCompanion] = useState('')

    const onQuestionChange = () => {
        setQuestion(question + 1)
    }

    const onAliasChange = (event) => {
        setAlias(event.target.value)
    }

    const onWeaponChange = (event) => {
        setWeapon(event.target.value)
    }

    const onCompanionChange = (event) => {
        setCompanion(event.target.value)
    }


    return (
        <div>
            {question === 1 && (
                <FirstQuestion 
                    onQuestionChange={onQuestionChange}
                />
            )}
            {question === 2 && (
                <SecondQuestion 
                    onQuestionChange={onQuestionChange}
                    alias={alias}
                    onAliasChange={onAliasChange}
                />
            )}
            {question === 3 && (
                <ThirdQuestion 
                    onQuestionChange={onQuestionChange}
                    alias={alias}
                    onAliasChange={onAliasChange}
                    weapon={weapon}
                    onWeaponChange={onWeaponChange}
                />
            )}
            {question === 4 && (
                <FourthQuestion 
                    onQuestionChange={onQuestionChange}
                    alias={alias}
                    onAliasChange={onAliasChange}
                    weapon={weapon}
                    onWeaponChange={onWeaponChange}
                    companion={companion}
                    onCompanionChange={onCompanionChange}
                />
            )}
            {question === 5 && (
                <Overview
                    onQuestionChange={onQuestionChange}
                    alias={alias}
                    onAliasChange={onAliasChange}
                    weapon={weapon}
                    onWeaponChange={onWeaponChange}
                    companion={companion}
                    onCompanionChange={onCompanionChange}
                />
            )}
        </div>
    )
}
export default Form