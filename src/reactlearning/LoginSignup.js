import React, { useState } from "react";
import classes from "./LoginSignup.module.css";

function CardShow(props) {
  return (
    <>
      <div className="border-2 w-96  m-auto hover:scale-110 ransition duration-700 ease-in-out hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] ">
        <img src={props.img} alt="Money Hiest" />
        <div className="p-3">
          <h5 className="text-xl font-semibold">{props.title}</h5>
          <p className="py-2 leading-7">{props.disc}</p>
          <a href={props.hrefmoneyheist}>
            <button className="border-2 bg-purple-400 px-6 text-white py-2 rounded-lg ">
              {props.button}
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

const LoginSignup = () => {
  const loginsign = {
    login: "Login",
    Signup: "Sign Up",
    btn_signup: "Sign Up",
    btn_login: "Login",
  };
  const [action, SetAction] = useState("login");

  const mystyle = {
    width: "50%",
    margin: "auto",
    color: "white",
    backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)",
    padding: "10px",
    fontFamily: "Arial",
    border: "2px solid black",
    textAlign: "center",
    padding: "10px",
  };

  const title = {
    fontSize: "40px",
    fontWeight: "900",
    // color: "inear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
    color: "orange",
  };

  return (
    <>
      <div className={classes.LoginSignupCss}>
        <h2 className={classes.LoginSignupCss2}>{action}</h2>
        <div ClassName="my-5">
          {action === "login" ? (
            <div></div>
          ) : (
            <div className={classes.User}>
              <span>
                <i class="fa-solid fa-user"></i>
              </span>
              <input
                type=""
                name=""
                value=""
                ClassName="my-5"
                placeholder="Name"
              />
            </div>
          )}
        </div>
        <div ClassName={classes.Email}>
          <span>
            <i class="fa-solid fa-envelope"></i>
          </span>
          <input type="" name="" value="" ClassName="" placeholder="Email Id" />
        </div>
        <div ClassName="Password">
          <span>
            <i class="fa-solid fa-lock"></i>
          </span>
          <input type="" name="" value="" ClassName="" placeholder="Password" />
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div>
            <p>Lost Password? Click here?</p>
          </div>
        )}

        <button
          className={action === "Sign Up" ? "Submit gray" : "Submit"}
          onClick={() => SetAction("Sign Up")}
        >
          {loginsign.btn_signup}
        </button>
        <button
          className={action === "login" ? "Submit gray" : "Submit"}
          onClick={() => SetAction("login")}
        >
          {loginsign.login}
        </button>
      </div>
    </>
  );
};
export default CardShow;
export { LoginSignup };
