import React from 'react';

export const OnlyIf = (props) => {
    return (
        props.test ? props.children : null
    )
}