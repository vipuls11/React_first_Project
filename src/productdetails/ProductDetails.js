import React from "react";
import classes from "./ProductDetails.module.css";
// import ProductImage from "../component/ProductImage";

const ProductDetails = (props) => {
  console.log(props, "props vipul vishwkarma");
  // const colorOptions = props.image.map((item, pos) => {
  //   return (
  //     <img
  //       key={pos}
  //       src={item.imageUrl}
  //       alt={item.StyleName}
  //       // className={classArr.join("")}
  //     />
  //   );
  // });

  const handleClick = (item) => {
    props.setImage(item.imageUrl);
    // console.log(item, "colorOptions", "hello");
  };

  return (
    <div className={classes.SmartwatchSubContent}>
      <h2 className="">{props.title}</h2>
      <p>{props.description}</p>
      <div className="">
        <h5 htmlFor="" className="">
          {props.Select_Color}
        </h5>
        <div className={classes.Smartwatchimage}>
          {/* {colorOptions} */}
          {props.image.map((item, pos) => {
            return (
              <img
                onClick={() => handleClick(item)}
                key={pos}
                src={item.imageUrl}
                alt={item.StyleName}
                // className={classArr.join("")}
              />
            );
          })}
          {/* <img src="https://imgur.com/iOeUBV7.png" alt="Orange-watch" className=""/>
                    <img src="https://imgur.com/Mplj1YR.png" alt="Grey-watch" className=""/>
                    <img src="https://imgur.com/xSIK4M8.png" alt="Brown-watch" className=""/> */}
        </div>
      </div>
      <div className="">
        <h5 htmlFor="" className="">
          {props.Select_Feature}
        </h5>
        <div className={classes.SmartwatchButton}>
          <button
            type=""
            className={classes.Time}
            onClick={() => props.setIsActive(false)}
          >
            {props.Button_Time}
          </button>
          <button
            type=""
            className={classes.Btn}
            onClick={() => props.setIsActive(true)}
          >
            {props.Button_Heart_Rate}
          </button>
        </div>
      </div>
      <button type="" className={classes.Buynow}>
        {props.Button_Buy_Now}
      </button>
    </div>
  );
};

export default ProductDetails;
