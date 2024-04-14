import React from "react";

const Slotmachine = () =>{
    const slotimg="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Little_red_slot_machine.svg/1280px-Little_red_slot_machine.svg.png";
    return(
        <>
        <p className="flex gap-2 items-center justify-center text-xl py-3 my-5 bg-gray-400"><span><img src={slotimg} alt="Slot Machine" className="w-14 h-14"/></span>Welocme to <b> Slot machine game </b> <span><img src={slotimg} alt="Slot Machine" className="w-14 h-14"/></span></p>
        </>
    )
}
 
const Slotmatchmachine = (props) =>{
// let x = '😊';
// let y = '😊';
// let z = '😊';

if((props.x===props.y) && (props.y===props.z)){
    return(
        <>
        <div className="text-center border border-black w-72 m-auto">
            <h4>{props.x} {props.y} {props.z}</h4>
            <p>This is matching</p>
        </div>
         <hr/>
        </>
    )
}
else{
   return(
     <>
    <div className="text-center border border-black w-72 m-auto">
        <h4>{props.x} {props.y} {props.z}</h4>
            <p>This is not matching</p> 
    </div>
    <hr/>
    </>
   )
}

}

const SlotM= () =>{
   return(
    <>
     <Slotmachine/>
     <Slotmatchmachine x="😊" y="😊" z="😊"/>
       <Slotmatchmachine x="😊" y="🥲" z="😊"/>
         <Slotmatchmachine x="😊" y="😊" z="🥹"/>
    </>
   )

}

export default Slotmachine;
export {Slotmatchmachine, SlotM}