import React from "react";

function BlogCardDynamic(props) {
  const Blogs = {
    Title: "BLog Title One",
    Date: "23-04-24",
    Discription:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    Button: "Read More",
  };
  return (
    <div className="">
      <div className="border border-black p-5 bg-sky-950 ">
        <h3 className="text-lg font-semibold text-white">{props.Title}</h3>
        <span>{props.Date}</span>
        <p className="text-white">{props.Discription}</p>
        <button className="border p-2 my-3 bg-red-400 border-black text-white font-semibold">
          {props.Button}
        </button>
      </div>
      <div className="border border-blacpropsk my-5 p-5 bg-sky-950">
        <h3 className="text-lg font-semibold text-white">Blog Title</h3>
        <p className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>
        <button className="border p-2 my-3 bg-red-400  border-black text-white font-semibold">
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

export default BlogCardDynamic;
