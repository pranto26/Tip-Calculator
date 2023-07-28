import React from 'react';

const Output = ({bill,tip}) => {
    return (
        <div>
            <h4>Your have to pay : ${bill + tip} (${bill} + ${tip} tip)</h4>
        </div>
    );
};

export default Output;