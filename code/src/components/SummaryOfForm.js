import React from 'react';



const SummaryOfForm = ({nameData, musicianData, instrumentData}) => {
    return (
        <div>
            {nameData}
            {musicianData}
            {instrumentData}
        </div>
    )
}

export default SummaryOfForm;