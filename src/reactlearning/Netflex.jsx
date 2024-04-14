import React from 'react';
 import Sdata from './Sdata';

 const Netflex=()=>{
 return(
                <div className="w-96 m-auto bg-red-200 p-2">
                    <img src={Sdata[1].img} alt="" className="w-full"/>
                    <h3 className="text-2xl font-bold my-3">{Sdata[1].title}</h3>
                    <p>{Sdata[1].body}</p>
                </div>
            )
 }

 export default Netflex;