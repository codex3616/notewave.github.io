import React from "react";
// import img from "../../assets/logo.gif";
import style from "../../style/navbar.module.css";
import { GiNotebook } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      {/* <h4 className=" text-5xl font-medium">Akash</h4> */}
      <nav
        className={`${style.nav} container mx-auto  bg-white rounded-xl mt-6 `}
      >
        <div className={`${style.brandWithList} flex justify-between  p-2`}>
          <div className=" flex">
            <span>
              <GiNotebook className={style.icon} />
            </span>
            <h3 className={style.logo}>NoteWave</h3>
          </div>
          <div className="login">
            <ul className={`${style.list} flex justify-end`}>
              <li className="text-2xl">
                <button className={`${style.btn} ${style.btn1} `}>
                  SignIn
                </button>
              </li>
              <li className="text-2xl ">
                <button className={`${style.btn} ${style.btn2}`}>SignUp</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
