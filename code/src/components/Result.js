import React from 'react';

export const Result = ({ book, language, version }) => {
    return (
        <>
        <p>You would like {book}</p>
        <p>in {language}</p>
        <p>illustrated by {version}</p>
        </>
    )
}