import React from 'react';
import Star from './Star';

import Button from "./Button"

const RatingStars = ({ gradeIndex, OnGradeIndexChange }) => {

    const GRADES = ['', 'Poor', 'Fair', 'Good', 'Very Good'];
    const activeStar = {
        fill: 'purple'
    };

    return (
        <>
            <p className="label-title">How would you rate your knowledge about plant care?</p>
            <div className="container">
                <p className="result">{GRADES[gradeIndex] ? GRADES[gradeIndex] : 'Excellent'}</p>
                <div className="stars">
                    {
                        GRADES.map((grade, index) => (
                            <Star
                                index={index}
                                key={grade}
                                OnGradeIndexChange={OnGradeIndexChange}
                                style={gradeIndex > index ? activeStar : {}}
                            />
                        ))
                    }
                </div>
            </div >
            <Button button="NEXT" />
        </>
    );
}

export default RatingStars;