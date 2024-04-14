import React from "react";

function ParGoodmorning() {
  // 2024, 12, 4, 4;
  const time = new Date();
  const times = time.getHours();
  let greeting = "";
  const StyleCssgreeting = {};

  const StyleCssPara = {
    fontSize: "30px",
    textAlign: "center",
    fontWeight: "600",
    border: "2px solid black",
    // width: "400px",
    // transform: "translate(50%)",
    margin: "20px 0px",
    backgroundColor: "skyblue",
  };

  if (times >= 1 && times < 12) {
    greeting = "Good Morning";
    StyleCssgreeting.color = "Green";
    StyleCssgreeting.backgroundColor = "pink";
  } else if (times >= 12 && times < 19) {
    greeting = "Good AfterNoon";
    StyleCssgreeting.color = "Orange";
    StyleCssgreeting.backgroundColor = "brown";
  } else {
    greeting = " Good Evening";
    StyleCssgreeting.color = "Gray";
    StyleCssgreeting.backgroundColor = "Yellow";
  }
  return (
    <>
      <p style={StyleCssPara}>
        {times} <span style={StyleCssgreeting}>{greeting}</span>
      </p>
    </>
  );
}

export default ParGoodmorning;
