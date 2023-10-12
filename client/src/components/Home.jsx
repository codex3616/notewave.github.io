import React from "react";
import Navbar from "./helperComponents/Navbar";
import img from "../assets/runner1.png";
import Footer from "./helperComponents/Footer";
// import img2 from "../assets/PNG/new-beginnings.png";
import style from "../style/home.module.css";

const home = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className={`${style.flex} flex px-4`}>
          <div className={`${style.textItems} w-1/2  mt-11 `}>
            <div
              className={`${style.text}  flex flex-col rounded-xl mx-auto px-6  `}
            >
              <h1 className=" text-7xl mt-11">All your notes.</h1>
              <h1 className=" text-7xl">Organized.</h1>
              <h1 className=" text-7xl">Effortless.</h1>
              <p className=" text-2xl mt-4 ">
                Inspiration strikes anywhere. NoteWave lets you capture,
                organize, and share your ideas across any device.
              </p>
              <button className={`${style.btn}  text-center mt-4 text-xl`}>
                <span className={style.front}>
                  SignUp <span className=" opacity-50">-its free</span>
                </span>
              </button>
              {/* <p>All your notes organized.</p>
            <p>Effortless.</p> */}
            </div>
          </div>
          <div className={` w-1/2  mt-11 ${style.imgDiv}  `}>
            <div className={style.penDiv}>
              <i class="fa-solid fa-pen fa-bounce fa-2xl"></i>
            </div>
            <img src={img} className={`${style.img} `} alt="" />
          </div>
        </div>
        <div className="waste my-11">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sint
          sit nobis veniam sequi impedit repudiandae id, eligendi vero corrupti
          accusantium? Libero officia iure corrupti dolor expedita pariatur
          accusantium, atque quas et reprehenderit culpa molestias! Maiores odio
          accusamus, magni explicabo commodi quasi illum, omnis nobis quam,
          blanditiis iusto. Asperiores, ratione!
        </div>
      </section>
      <Footer />
    </>
  );
};

export default home;
