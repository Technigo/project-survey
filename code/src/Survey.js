import React from 'react'
import { Submit } from 'Submit'
import { Dropdown } from './Dropdown'
import { Radio } from './Radio'
import { Text } from './Text'

export const Survey = () => {
    return (
        <>
            <Dropdown 
            one={'Ketchup'}
            two={'Beer'}
            three={'Both'}
            />
            <Radio 
            forOne={"baby"}
            forTwo={"prime"}
            forThree={"oldiebutgoldie"}
            name={"age"}
            valueOne={"20"}
            valueTwo={"60"}
            valueThree={"100"}
            messageOne={"Not old at all, just a baby (0-20)"}
            messageTwo={"In my prime! (21-60)"}
            messageThree={"Can't even remember.. (61-100)"}
            />
            <Text/>
            <Submit/>
        </>
    )
}