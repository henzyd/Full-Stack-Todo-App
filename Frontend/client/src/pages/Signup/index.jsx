import React from "react";
import { Link } from "react-router-dom";
import Instagram from "../../assets/icons/Instagram.svg";
import Twitter from "../../assets/icons/Twitter.svg";
import Google from "../../assets/icons/Google Logo.svg";

const Signup = () => {
  return (
    <div className=" w-full grid grid-cols-2 min-h-screen">
      <div className=" bg-Primary flex flex-col gap-2 items-center justify-center">
        <figure className=" h-[15rem] w-full">
          <img src="" alt="" />
        </figure>
        <div className=" w-full flex flex-col items-center text-white gap-[3rem] text-[0.8rem]">
          <h1 className=" text-[1.6rem] font-bold">
            Let's help you, identify VIPs
          </h1>
          <p>
            Already have an account?{" "}
            <Link to={"/login"} className=" font-bold text-[1rem]">
              Login
            </Link>
          </p>
          <div className=" flex items-center gap-6">
            <img className=" w-7" src={Instagram} alt="Instagram" />
            <img className=" w-7" src={Twitter} alt="Twitter" />
          </div>
        </div>
      </div>
      <div className=" py-5 px-12 w-full flex flex-col items-center justify-center gap-8">
        <div className=" flex items-center justify-center gap-[10px] w-full border-Primary border-[1.5px] p-3 rounded-lg cursor-pointer">
          <img className=" w-6" src={Google} alt="" />
          <p className=" font-medium">Sign up with Google</p>
        </div>
        <div className=" grid grid-cols-3 w-full gap-3 items-center">
          <div className=" border-b-[1px] border-Input-Border "></div>
          <p>or</p>
          <div className=" border-b-[1px] border-Input-Border "></div>
        </div>
        <form
          method="POST"
          className=" w-full flex flex-col justify-center gap-6"
        >
          <div className=" flex items-center gap-10">
            <div className=" flex flex-col w-full items-start gap-2">
              <label htmlFor="firstName" className=" font-semibold">
                First Name
              </label>
              <input
                className=" w-full border border-Input-Border rounded-lg p-2 outline-none flex items-center"
                id="firstName"
                type="text"
              />
            </div>
            <div className=" flex flex-col w-full items-start gap-2">
              <label htmlFor="lastName" className=" font-semibold">
                Last Name
              </label>
              <input
                className=" w-full border border-Input-Border rounded-lg p-2 outline-none flex items-center"
                id="lastName"
                type="text"
              />
            </div>
          </div>
          <div className=" flex flex-col w-full items-start gap-2">
            <label className=" font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border border-Input-Border rounded-lg p-2 outline-none flex items-center"
              id="email"
              type="email"
            />
          </div>
          <div className=" flex flex-col w-full items-start gap-2">
            <label className=" font-semibold" htmlFor="password">
              Password
            </label>
            <input
              className="w-full border border-Input-Border rounded-lg p-2 outline-none flex items-center"
              id="password"
              type="password"
            />
          </div>
          <div className=" flex items-center gap-2">
            <input className=" w-4 h-4 cursor-pointer" type="checkbox" />
            <p className="">
              I agree to the{" "}
              <span className=" text-Primary">Term of Service</span> and{" "}
              <span className=" text-Primary">Privacy Notice</span>
            </p>
          </div>
          <button
            className=" w-full p-3 text-white bg-Primary rounded-lg"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
