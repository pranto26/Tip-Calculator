import React from 'react';

const BillInput = ({bill,setBill}) => {
    return (
        <div className='flex flex-col justify-center items-center'>
          Enter Your Total Bill:  <input type="text" placeholder='Enter bill amout $' value={bill}  onChange={(e) => setBill(Number(e.target.value))} className="input-md input-bordered border-cyan-400 input-success w-full max-w-xs" />
        </div>
    );
};

export default BillInput;