import React from "react";

function ReactTut1() {
  const Image = [
    {
      Arjoo: "image/arjoo.jpeg",
      Name: "Arjoo Vishwakarma",
      Details: "fdghfhgjghjhgjgh",
    },
    {
      Arjoo: "image/arjoo.jpeg",
      Name: "Arjoo Vishwakarma",
      Details: "fdghfhgjghjhgjgh",
    },
    {
      Arjoo: "image/arjoo.jpeg",
      Name: "Arjoo Vishwakarma",
      Details: "fdghfhgjghjhgjgh",
    },
    {
      Arjoo: "image/arjoo.jpeg",
      Name: "Arjoo Vishwakarma",
      Details: "fdghfhgjghjhgjgh",
    },
  ];
  // const Userdetails = Image.map((item, index) => {
  // console.log(Userdetails, "bsdbd");
  return (
    <>
      <h2 className="">Thapa Technical Netflix Pick</h2>
      {/* <img src={item.Arjoo} alt="" /> */}
      <p>List of 5 Best Series</p>
      <ol className="">
        <li className="">Dark</li>
        <li className="">Extra Curricular</li>
        <li className="">My Holo Love</li>
        <li className="">My first-2 love</li>
        <li className="">Robot</li>
      </ol>
    </>
  );
  // });
}

export default ReactTut1;
