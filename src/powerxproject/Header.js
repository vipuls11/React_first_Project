import React from "react";
import classes from "./Header.module.css";
import Submenu from "./Submenu";

function Header(props) {
  const header = {
    img_log: "./image/logoavs.png",
    about: "About",
    branches: "branches",
    products: "Products",
    rma_poloicy: "RMA Policy",
    contact_us: "Contact Us",
    // search: <FontAwesomeIcon icon="fa-solid fa-user" />,
    // user: <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />,
    // cart: <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />,
  };

  return (
    <>
      <nav className={classes.Main_Header}>
        <div className="Log">
          <img src={header.img_log} alt="log-Image" />
        </div>
        <div className="">
          <ul className={classes.Header_Subcat}>
            <li className="Menu">{header.about}</li>
            <li className="Menu">{header.branches}</li>
            <li className={classes.Menu}>
              {header.products}
              <div className={classes.Submenu}>
                <Submenu />
              </div>
            </li>
            <li className="Menu">{header.rma_poloicy}</li>
            <li className="Menu">{header.contact_us}</li>
          </ul>
        </div>
        <div className={classes.User_Header}>
          <button type="" className="">
            {/* {header.search} */}
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <button type="" className="">
            {/* {header.user} */}
            <i class="fa-solid fa-user"></i>
          </button>
          <button type="" className="">
            {/* {header.cart} */}
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
