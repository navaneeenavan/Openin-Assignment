import React from "react";
import { DiEnvato } from "react-icons/di";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple, AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";

function App() {
  return (
    <div className="w-screen overflow-x-hidden flex font-poppins  flex-row bg-[#F8FAFF]">
      <div className=" lg:w-1/5 lg:h-screen bg-[rgb(96,91,255)] lg:absolute top-0"></div>
      <div className="hidden lg:w-1/2 h-screen bg-[rgb(96,91,255)] transform -skew-x-12 lg:flex flex-col">
        <div className="transform skew-x-12 flex flex-col justify-between h-svh m-10 ">
          <div className="flex w-full justify-start">
            <DiEnvato size={120} className="text-white flex " />
          </div>
          <div className="text-7xl text-white font-montserrat font-semibold text-center justify-center">
            BASE
          </div>
          <div className="flex gap-10 mb-10 justify-center">
            <FaGithub size={40} className="text-white" />
            <AiFillTwitterCircle size={40} className="text-white" />
            <FaLinkedin size={40} className="text-white" />
            <IoLogoDiscord size={40} className="text-white" />
          </div>
        </div>
      </div>
      <div className="lg:hidden sm:flex w-full h-28 absolute top-0 z-10 bg-[rgb(96,91,255)]"> </div>


      <div className=" w-full lg:w-1/2 h-screen bg-[#F8FAFF] flex flex-col justify-center items-center ">
        <div className="max-w-md lg:pl-5 w-full pr-10 ">
          <div className="pl-5 lg:pl-10 space-y-3">
            <p className="text-3xl font-bold"> Sign In</p>
            <p>Sign in to your account</p>
          </div>
          <div className="flex flex-row w-full space-x-3 px-5 lg:px-10  max-w-md mt-5 ">
            <div className="flex justify-start items-center rounded-lg w-full h-10 bg-white text-left lg:px-5 text-nowrap space-x-5 lg:space-x-2">
              <FcGoogle size={25} />
              <p className="text-sm justify-center">Sign-in with Google</p>
            </div>
            <div className="flex justify-center items-center rounded-lg w-full h-10 bg-white text-center px-5 text-nowrap space-x-5 lg:space-x-2">
              <AiFillApple className="text-gray-500" size={25} />
              <p className="text-sm">Sign-in with Apple</p>
            </div>
          </div>
          <div className="flex flex-col w-full h-fit items-start mr-5 px-4 lg:px-8 lg:py-7 bg-white m-8 lg:m-10 space-y-6 text-left rounded-xl">
            <p className="w-full items-start">Email Address</p>
            <input
              type="text"
              size={30}
              className="w-full h-10 bg-gray-100 rounded-lg text-left pl-2 mr-10"
            />
            {/* <div className="flex flex-col w-full h-fit items-start px-8 py-7 bg-white m-10 space-y-6 text-left rounded-xl"></div> */}
            <p className="w-full items-start">Password</p>
            <input
              type="password"
              size={30}
              className="w-full h-10 bg-gray-100 rounded-lg pl-2"
              required
            />
            <p className="text-blue-500 mt-2"> Forgot Password ?</p>
            <button className="w-full rounded-lg bg-blue-500 h-10 mt-5">
              Sign In
            </button>
          </div>
          <div className="flex justify-center items-center pl-10 text-gray-400">
            Don't have an account ?
            <a className="text-blue-500 ml-1" href="https://psgtech.edu">
              {" "}
              Register Here{" "}
            </a>
          </div>
        </div>

        <div className=" flex gap-10  items-end lg:hidden mt-24">
            <FaGithub size={40} className="text-black" />
            <AiFillTwitterCircle size={40} className="text-black" />
            <FaLinkedin size={40} className="text-black" />
            <IoLogoDiscord size={40} className="text-black" />
          </div>
      </div>
    </div>
  );
}

export default App;