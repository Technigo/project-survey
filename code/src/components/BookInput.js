import React from 'react';

const BookInput = (props) => {
    return (
        <div className="text-input-container">
            <label className="text-input-label"
                htmlFor="bookname">
                Name the latest book you read:
            </label>
            <input
                id="bookname"
                type="text"
                value={props.bookname}
                onChange={props.onBookChange} />
        </div>
    );
};

export default BookInput