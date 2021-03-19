import React from 'react';

const BookInput = (props) => {
    return (
        <div>
            <label
                htmlFor="bookname">
                What's the name of the latest book you read?
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