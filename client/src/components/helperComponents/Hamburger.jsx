import React from "react";
import style from "../../style/navbar.module.css";

const Hamburger = () => {
  return (
    <>
      <div className={`${style.hamburger}`}>
        <ul className={`${style.list} flex justify-end`}>
          <li className="text-2xl">
            <button className={`${style.btn} ${style.btn1} `}>SignIn</button>
          </li>
          <li className="text-2xl ">
            <button className={`${style.btn} ${style.btn2}`}>SignUp</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hamburger;
