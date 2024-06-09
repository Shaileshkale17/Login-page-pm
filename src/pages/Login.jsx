import React, { useState } from "react";
import svgLogo from "../assets/logoImage_prev_ui.png";
import InputBox from "../components/inputBoxEmail";
import EmailIcon from "../assets/email-svgrepo-com.svg";
import PasswordIcon from "../assets/password-svgrepo-com.svg";
import InputPasswordmains from "../components/InputPasswordmain";
import googleIcon from "../assets/google-color-svgrepo-com (1).svg";
import xIcon from "../assets/twitter-3-logo-svgrepo-com.svg";
import github from "../assets/github-octocat-svgrepo-com.svg";
import UserIcon from "../assets/user-svgrepo-com.svg";
const Login = () => {
  const [Forgot, setForgot] = useState(false);
  const [signup, setsignup] = useState(false);
  const handleSubmit = () => {};
  const googleAuth = () => {
    console.log("auth in google");
  };
  const XAuth = () => {
    console.log("auth in X");
  };
  const GithubAuth = () => {
    console.log("auth in github");
  };
  return (
    <div className="h-screen w-screen flex-col  items-center justify-center bg-slate-300 flex ">
      <img src={svgLogo} className="w-64 h-auto" />
      {signup === false ? (
        <div className="flex p-4 flex-col gap-2 rounded-lg bg-white">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl font-sans">Sign In Access</h1>
            <p className="w-[78%] text-center font-serif">
              You must become a member to login and access the entire site
            </p>
          </div>
          <div className="flex flex-col px-8 gap-4">
            <InputBox
              title="Email Address"
              placeholderparagraph="Enter email address"
              inputClasses="border p-2 w-full pl-[47px] font-serif"
              img={EmailIcon}
              imgClass="w-[12%]"
            />
            <div>
              <InputPasswordmains
                title="Password"
                placeholderparagraph="Enter Password"
                inputClasses="border p-2 w-full pl-[47px] font-serif"
                img={PasswordIcon}
                imgClass="w-[12%]"
              />
              <p
                className="text-right font-serif text-[#2c2c9a] cursor-pointer"
                onClick={() => setForgot(true)}>
                Forgot Password
              </p>
            </div>
            <button
              className="px-8 py-2 rounded font-semibold bg-[#2c2c9a] text-white "
              onClick={() => handleSubmit()}>
              Sign in
            </button>
            <hr className="font-bold" />
            <div className="flex gap-4 flex-row items-center justify-center">
              <img
                src={googleIcon}
                className="w-6 h-auto cursor-pointer"
                onClick={() => googleAuth()}
              />
              <img
                src={xIcon}
                className="w-6 h-auto cursor-pointer"
                onClick={() => XAuth()}
              />
              <img
                src={github}
                className="w-6 h-auto cursor-pointer"
                onClick={() => GithubAuth()}
              />
            </div>
          </div>
          <div className="flex mt-5 flex-row font-serif justify-center items-center">
            <p>
              Not a member yet ?{" "}
              <span
                className="text-[#2c2c9a] cursor-pointer"
                onClick={() => setsignup(true)}>
                Sign Up
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex p-4 flex-col gap-2 rounded-lg bg-white">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-xl font-sans">Sign up Access</h1>
            <p className="w-[78%] text-center font-serif">
              You must become a member to login and access the entire site
            </p>
          </div>
          <div className="flex flex-col px-8 gap-4">
            <InputBox
              title="Username"
              placeholderparagraph="Enter Username"
              inputClasses="border p-2 w-full pl-[47px] font-serif"
              img={UserIcon}
              imgClass="w-[12%]"
            />
            <InputBox
              title="Email Address"
              placeholderparagraph="Enter email address"
              inputClasses="border p-2 w-full pl-[47px] font-serif"
              img={EmailIcon}
              imgClass="w-[12%]"
              type="email"
            />
            <div>
              <InputPasswordmains
                title="Password"
                placeholderparagraph="Enter Password"
                inputClasses="border p-2 w-full pl-[47px] font-serif"
                img={PasswordIcon}
                imgClass="w-[12%]"
              />
              <p
                className="text-right font-serif text-[#2c2c9a] cursor-pointer"
                onClick={() => setForgot(true)}>
                Forgot Password
              </p>
            </div>
            <button
              className="px-8 py-2 rounded font-semibold bg-[#2c2c9a] text-white "
              onClick={() => handleSubmit()}>
              sign up
            </button>
            <hr className="font-bold" />
            <div className="flex gap-4 flex-row items-center justify-center">
              <img
                src={googleIcon}
                className="w-6 h-auto cursor-pointer"
                onClick={() => googleAuth()}
              />
              <img
                src={xIcon}
                className="w-6 h-auto cursor-pointer"
                onClick={() => XAuth()}
              />
              <img
                src={github}
                className="w-6 h-auto cursor-pointer"
                onClick={() => GithubAuth()}
              />
            </div>
          </div>
          <div className="flex mt-5 flex-row font-serif justify-center items-center">
            <p>
              Not a member yet ?{" "}
              <span
                className="text-[#2c2c9a] cursor-pointer"
                onClick={() => setsignup(false)}>
                Sign In
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
