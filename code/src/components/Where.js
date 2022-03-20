import React from 'react';

const Where = ({ whereInput, onWhereInputChange }) => {

    return (
        <>
            <form>
                <div className='container'>
                    Where do you like to watch movies?
                    <div >
                        <label>
                            <input
                                type="radio"
                                value="the cinema"
                                onChange={onWhereInputChange}
                                checked={whereInput === "the cinema"}
                            />
                            At the cinema
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="home"
                                onChange={onWhereInputChange}
                                checked={whereInput === "home"}
                            />
                            At home
                        </label>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Where;