import React from 'react';
import BlogCardDynamic from "./blogcard/BlogCardDynamic";
import ComCard from "./comcard/ComCard";

import PropsCard from "./temcard/PropsCard";
import Teamcard from "./temcard/Teamcard";

import ReactTut1 from "./reactlearning/ReactTut1";
import DateTimeTut2 from "./reactlearning/DateTimeTut2";
import ParGoodmorning from "./reactlearning/ParGoodmoring";
import Incrementcount from "./reactlearning/Incrementcount";
import name, {
  name1,
  helloy,
  Listtype,
  lists,
} from "./reactlearning/Parimportexport";

import Submenu from "./powerxproject/Submenu";
import BlogCard, {Card} from "./blogcard/BlogCard";
import CardShow, { LoginSignup } from "./reactlearning/LoginSignup";
import Jsx from "./Jsx"
import ReactTut2ifelse from './reactlearning/ReactTut2Ifelse';

import Sdata from "./reactlearning/Sdata";
import Slotmachine,{SlotM, Slotmatchmachine} from './slotmachine/Slotmachine';
import Currenttime from './reactlearning/Currenttime';
function Tutpra() {
  return (
    <div>
        <h1 class="">{name}</h1>
      <h1 class="">{name1}</h1>
      <h1 class="">{helloy()}</h1>
      <div>{LoginSignup()}</div>
      <div>
        <Incrementcount/>
        <Currenttime/>
      </div>
       <Submenu />
      <ParGoodmorning />
      {<DateTimeTut2 />}
      {<ReactTut1 />}
      <Jsx />
      <BlogCard />
         <BlogCardDynamic />
      <Teamcard />
      <PropsCard />
      {/* <ComCard /> */}
        <div>{Card()}</div>      
      {/* <CardShow
        img="https://static.javatpoint.com/top10-technologies/images/top-10-netflix-series-of-all-time2.png"
        title="Money Heist"
        disc="Money Heist is a Spanish heist crime drama television series developed by Lex Pi>na. Its Spanish title is La casa de papel,"
        button="Button"
        hrefmoneyheist="https://www.netflix.com/in/title/80192098"
      /> */}
      {/* <CardShow
        img={Sdata[0].id}
        title={Sdata[0].userId}
        disc={Sdata[0].title}
        button={Sdata[0].body}
        // hrefmoneyheist="https://www.netflix.com/in/title/80192098"
      /> */}
      {/* <CardShow
        img={Sdata[1].id}
        title={Sdata[1].userId}
        disc={Sdata[1].title}
        button={Sdata[1].body}
        // hrefmoneyheist="https://www.netflix.com/in/title/80192098"
      /> */}
     
      <ReactTut2ifelse/>
   

      {/* <Slotmachine/> */}
      <div>
        <SlotM/>
        {/* <Slotmatchmachine/> */}
      </div>

      
    </div>   
  )
 

  // //2cards by map.filter
  // const TeamCard = [
  //   {
  //     Name : 'Sachin maheta',
  //     Position: 'Devops',
  //     Date: '23/2/24',
  //     Discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  //   },
  //   {
  //     Name : 'Rohan chawada',
  //     Position: 'Devops',
  //     Date: '20/4/24',
  //     Discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  //   },
  //   {
  //     Title: 'Blog 3',
  //     Name : 'Ashwin Vishwakarma',
  //     Date: '15/2/24',
  //     Discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  //   },
  //   {
  //     Name : 'Pratik Vishwakarma',
  //     Position: 'Testing',
  //     Date: '23/2/24',
  //     Discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  //   },
  //   {
  //     Name : 'Pooja Gupta',
  //     Position: 'Developer',
  //     Date: '23/2/24',
  //     Discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  //   },
  //   {
  //     Name : 'Shweta Kamble',
  //     Position: 'Software developer',
  //     Date: '26/5/24',
  //     Discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  //   },
  //   {
  //     Name : 'Shubham Kamble',
  //     Position: 'Software developer',
  //     Date: '26/5/24',
  //     Discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  //   },
  //   {
  //     Name : 'Riya Yadav',
  //     Position: 'Software developer',
  //     Date: '26/5/24',
  //     Discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  //   },
  //   ]
  //  const Yourteamcard = TeamCard.map((item,pos)=>{
  // return(
  //   <Teamcard name="vipul Vishwakarma" position="developer" date="25/05/2024" discription="nsfdgdbvjbwrugiudbvdbvhb"/>
  // )
  //  })

  //  return(
  //   <div>
  //     {Yourteamcard}
  //   </div>
  //  )

  //  return(
  //   <div className="w-[95%] m-auto grid grid-cols-3 gap-5 my-5">
  //      {PropsblogCard}
  //   </div>
  // )

  //   return(
  //     <BlogCardDynamic />
  //   )

  //   return(
  //     <ComCard Name="Rahul Sharama"/>

  //   )
}
// export default Hello;
export default Tutpra