import React from 'react';

import { SummaryCss } from 'components/SummaryCss.css';


export const Summary = ({name, timesPerWeek, sweet }) => {
    
    return (
        <>
            <section className="summary">
                <h2 tabindex="0">Hey {name}! You eat sweets {timesPerWeek} times a week, and you're a fan of {sweet}! (so am I!)</h2>
            </section>
            <section className="summary-button" tabindex="0">
                <button tabindex="0" type="button" onSubmit="location.reload()">Again</button>
            </section>
        </>
    );
};

console.log(Summary)
