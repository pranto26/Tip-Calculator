import React from 'react';

const SelectPercentage = ({children,percentage,onSelect}) => {
    return (
        <div className='flex flex-col justify-center items-center'>
             <label className=' align-middle'>{children}</label>
<select value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))} className="select select-info w-full max-w-xs">

             
             <option value="0">Not Satisfied(0%)</option>
             <option value="5">It was okay(5%)</option>
             <option value="10">It was Good(10%)</option>
             <option value="20">Amazing(20%)</option>

</select>
        </div>
    );
};

export default SelectPercentage;