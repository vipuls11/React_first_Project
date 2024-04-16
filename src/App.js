import React from "react";
import logo from "./logo.svg";
import Header from "./powerxproject/Header";
import Bannerslider, {
  Image,
  Motherboard,
  LatestProduct,
  Printer,
  ProductShow,
} from "./powerxproject/Bannerslider";
import "./App.css";
import Footer from "./powerxproject/Footer";

function App() {
  // const App = () => {

  return (
    <div classname="">
      <div className="">
        <Header />
        <div>{Image()}</div>
        <Bannerslider />
        <div>{Motherboard()}</div>
        <div class="">{LatestProduct()}</div>
        <div>{Printer()}</div>
        <div>{ProductShow()}</div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
// export { App };
