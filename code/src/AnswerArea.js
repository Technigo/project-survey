import React from "react";
import { Radio } from "./Radio";
import { Dropdown } from "./Dropdown";
import { Text } from "./Text";

export const AnswerArea = ({ item }) => {
    if (item.formType === "radio") {
        return (
            <Radio key={item.question} item={item}/>
        )
    }
    else if (item.formType === "dropdown") {
        return (
            <Dropdown key={item.question} item={item}/>
        )
    }
    else if (item.formType === "text") {
        return (
            <Text key={item.question} item={item}/>
        )
    }
}