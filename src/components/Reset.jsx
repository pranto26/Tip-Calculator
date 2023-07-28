import React from 'react';

const Reset = ({onReset}) => {
    return (
        <div>
            <button onClick={onReset} className="btn btn-wide bg-red-500 text-white ">Reset</button>
        </div>
    );
};

export default Reset;