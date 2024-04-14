import React from "react";
import Netflex from "./Netflex";
import Amazon from "./Amazon";

 const NetflexSeries= "Netflex"

    const FavSeries = () =>{
        if(NetflexSeries === "Netflex"){
           return(<Netflex/>)
        }
        else{
            return(<Amazon/>) 
        }
    }

function ReactTut2ifelse(){
   
return(
    <div className="">
       <div className="my-5">
        {/* {
        (NetflexSeries ==="Amazon")? <div className="w-96 m-auto  bg-red-200 p-2">
                    <img src={Sdata[1].img} alt="" className="w-full"/>
                    <h3 className="text-2xl font-bold my-3">{Sdata[1].title}</h3>
                    <p>{Sdata[1].body}</p>
                </div>: <div className="w-96 m-auto bg-red-200 p-2">
                    <img src={Sdata[4].img} alt="" className="w-full"/>
                    <h3 className="text-2xl font-bold my-3">{Sdata[4].title}</h3>
                    <p>{Sdata[4].body}</p>
                </div>
       } */}

       {
        (NetflexSeries ==="Amazon")? <Netflex/>:<Amazon/>
       }
       </div>
        <FavSeries/>
    </div>
)
}

export default ReactTut2ifelse;

// https://www.youtube.com/watch?v=893B2M69IT0