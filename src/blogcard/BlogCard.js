import React from "react";

function BlogCard() {
  const Styles = {
    padding: "10px",
    backgroundColor: "red",
    // height: '600px',
  };
  return (
    <div className="BlogCard w-[95%] m-auto my-5 lg:flex gap-5 text-center">
      <div className="border border-black p-5 bg-sky-950 ">
        <h3 className="text-lg font-semibold text-white">Blog Title</h3>
        <p className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
        <button className="p-2 my-3 bg-red-400 border border-black text-white font-semibold">
          Read More
        </button>
      </div>
      <div className="border border-black my-5 p-5 bg-sky-950">
        <h3 className="text-lg font-semibold text-white">Blog Title</h3>
        <p className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
        <button className="p-2 my-3 bg-red-400 border border-black text-white font-semibold">
          Read More
        </button>
      </div>
      <div className="border border-black p-5 bg-sky-950">
        <h3 className="text-lg font-semibold text-white">Blog Title</h3>
        <p className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
        <button className="p-2 my-3 bg-red-400 border border-black text-white font-semibold">
          Read More
        </button>
      </div>
    </div>
  );
}

function Card() {
  const BlogCard1 = [
    {
      img: "https://img.freepik.com/free-photo/photorealistic-scene-non-monogamous-relationship_23-2151266356.jpg?size=626&ext=jpg",
      Title: "Blog 1",
      Name: "Sachin maheta",
      Date: "23/2/24",
      Discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: "https://img.freepik.com/free-photo/photorealistic-scene-non-monogamous-relationship_23-2151266456.jpg?size=626&ext=jpg",
      Title: "Blog 2",
      Name: "Rohan chawada",
      Date: "20/4/24",
      Discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: "https://img.freepik.com/free-photo/young-couple-getting-married-hot-air-balloon_23-2151158078.jpg?size=626&ext=jpg",
      Title: "Blog 3",
      Name: "Ashwin Vishwakarma",
      Date: "15/2/24",
      Discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: "https://img.freepik.com/free-photo/80-s-inspired-summer-activities-with-retro-aesthetic_23-2151425780.jpg?size=626&ext=jpg",
      Title: "Blog 4",
      Name: "Pratik Vishwakarma",
      Date: "23/2/24",
      Discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: "https://img.freepik.com/free-photo/80-s-inspired-summer-activities-with-retro-aesthetic_23-2151425802.jpg?size=626&ext=jpg",
      Title: "Blog 5",
      Name: "Pooja Gupta",
      Date: "23/2/24",
      Discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: "https://img.freepik.com/free-photo/photorealistic-scene-non-monogamous-relationship_23-2151266386.jpg?size=626&ext=jpg",
      Title: "Blog 6",
      Name: "Shweta Kamble",
      Date: "26/5/24",
      Discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: "https://img.freepik.com/free-photo/people-traveling-enjoying-their-vacation_23-2151382982.jpg?size=626&ext=jpg",
      Title: "Blog 7",
      Name: "Shubham Kamble",
      Date: "26/5/24",
      Discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      img: "https://img.freepik.com/free-photo/young-woman-man-with-surf-boards-sitting-rock-near-sea_23-2148021680.jpg?size=626&ext=jpg",
      Title: "Blog 8",
      Name: "Riya Yadav",
      Date: "26/5/24",
      Discription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const PropsblogCard = BlogCard1.map((item, index) => {
    return (
      // <PropsCard
      //   key={index}
      //   title={item.Title}
      //   name={item.Name}
      //   date={item.Date}
      //   description={item.Discription}
      // />
      <div className="blogList border my-2 ">
        <img src={item.img} alt="Person Name" />
        <h3>{item.Title}</h3>
        <h3>{item.Name}</h3>
        <span>{item.Date}</span>
        <p>{item.Discription}</p>
      </div>
    );
  });

  return (
    <div class="grid grid-cols-5 justify-items-center  gap-5 w-[95%] m-auto">
      {PropsblogCard}
    </div>
  );
}

export default BlogCard;
export { Card };
