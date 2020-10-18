import React from 'react'
import { Submit } from 'Submit'
import { Dropdown } from './Dropdown'
import { Radio } from './Radio'
import { Text } from './Text'

export const Survey = () => {
    return (
        <>
            <Dropdown />
            <Radio />
            <Text/>
            <Submit/>
        </>
    )
}