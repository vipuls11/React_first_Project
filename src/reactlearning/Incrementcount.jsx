import React, { useState } from 'react';

function Incrementcount(){
    const [count, setCount] = useState(0)
    function IncrNum() {
        setCount(count+1)
        // console.log("Clicked Vipul "+ count++);
    }
return(
    <>
    <div className='text-center text-2xl font-extrabold  my-5'>
        <h3 className='my-5 text-4xl'>{count}</h3>
    <button className='border-2 px-8 py-2 bg-blue-400 rounded-lg border-black' onClick={IncrNum}>Click To Increment Count</button>
    </div>
    </>
)
}

export default Incrementcount;