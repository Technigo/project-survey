import React from 'react'
import { Submit } from 'Submit'
import { Dropdown } from './Dropdown'
import { Radio } from './Radio'
import { Text } from './Text'
import { Checkbox } from './Checkbox'

export const Survey = () => {
    return (
        <>
            <Dropdown
                question={'What would you prefer?'}
                one={'Ketchup'}
                two={'Beer'}
                three={'Both'}
            />
            <Radio
                question={'Whats your age dude?'}
                name={"age"}
                valueOne={"20"}
                valueTwo={"60"}
                valueThree={"100"}
                messageOne={"Not old at all, just a baby (0-20)"}
                messageTwo={"In my prime! (21-60)"}
                messageThree={"Can't even remember.. (61-100)"}
            />
            <Checkbox 
            question={'Would you take this survey again?'}
            one={'Yes, most definately'}
            two={'No way José.'}
            />
            <Text />
            <Submit />
        </>
    )
}