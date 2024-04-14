import React from 'react';
import Sdata from './Sdata';

const Amazon = () =>{
 return(
                <div className="w-96 m-auto bg-red-200 p-2">
                    <img src={Sdata[4].img} alt="Hello World" className="w-full"/>
                    <h3 className="text-2xl font-bold my-3">{Sdata[4].title}</h3>
                    <p>{Sdata[4].body}</p>
                </div>
            )
}

export default Amazon;