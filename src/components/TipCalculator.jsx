import React, { useState } from 'react';
import BillInput from './BillInput';
import SelectPercentage from './SelectPercentage';
import Output from './Output';
import Reset from './Reset';

const TipCalculator = () => {

    const[bill,setBill]=useState(0);
    const [percentage1, setPercentage1] = useState(0);
    const [percentage2, setPercentage2] = useState(0);

    const tip = bill * ((percentage1 + percentage2) / 2 / 100);

    function handleReset() {
        setBill("");
        setPercentage1(0);
        setPercentage2(0);
      }


    return (

<div className="flex flex-col w-full">
  <div className="grid h-70 card bg-base-300 rounded-box place-items-center"><div>
            <BillInput bill={bill} setBill={setBill}/>
            <SelectPercentage percentage={percentage1} onSelect={setPercentage1} >
                How did you like this service?
            </SelectPercentage>
            <SelectPercentage  percentage={percentage2} onSelect={setPercentage2} >
                How did your friend like this service?
            </SelectPercentage><br></br>
            
        </div></div> 
  <div className="divider"></div> 

  <div className="grid h-70 card bg-base-300 rounded-box place-items-center"> {bill > 0 && (
          <>
            <Output bill={bill} tip={tip} /><br></br>
            <Reset onReset={handleReset} />
          </>
        )}</div>
</div>
        
    );
};

export default TipCalculator;