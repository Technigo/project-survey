import React from 'react'
import TextInput from './TextInput'

const Survey = () => {
    return (
        <form>
            <div>
                <p>Start by entering your name</p>
                <TextInput />
            </div>
            <div>
                <p>Select your favourite something</p>
            </div>
            <div>
                <p>Question 3</p>
            </div>
        </form>
        

    )

}

export default Survey