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
import axios from "axios";
import { auth, googleAuthprovider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = () => {
  const [Forgot, setForgot] = useState(false);
  const [signup, setsignup] = useState(false);
  const [loginEmail, setloginEmail] = useState("");
  const [loginpassword, setloginPassword] = useState("");
  const [signupEmail, setsignupEmail] = useState("");
  const [signuppassword, setsignupPassword] = useState("");
  const [signupusername, setsignupUsername] = useState("");

  const singINWithGoogle = async () => {
    try {
      const resut = await signInWithPopup(auth, googleAuthprovider);
      console.log(resut);
      // localStorage.setItem("token", resut.user.accessToken);
      // localStorage.setItem("user", JSON.stringify(resut.user));
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const Email = loginEmail;
  //     const Password = loginpassword;
  //     const result = await signInWithEmailAndPassword(auth, Email, Password);
  //     console.log(result);
  //     // localStorage.setItem("token", resut.user.accessToken);
  //     // localStorage.setItem("user", JSON.stringify(resut.user));
  //   } catch (error) {
  //     console.log(error);
  //     console.log(error.message);
  //   }
  // };

  // const handleSubmit = () => {
  //   const res = axios.post(
  //     "http://localhost:8080/api/v1/users/login",
  //     {
  //       email: loginEmail,
  //       password: loginpassword,
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );

  //   console.log("res", res);
  // };
  // const handleSubmitSignup = () => {
  //   const res = axios.post(
  //     "http://localhost:8080/api/v1/users/register",
  //     {
  //       email: signupEmail,
  //       password: signuppassword,
  //       username: signupusername,
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );

  //   console.log("res", res);
  // };

  const XAuth = () => {
    console.log("auth in X");
  };
  const GithubAuth = () => {
    console.log("auth in github");
  };
  return (
    <div className="h-screen w-screen flex-col  items-center justify-center bg-[#efefef] flex ">
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
              setValue={loginEmail}
              getValue={setloginEmail}
            />
            <div>
              <InputPasswordmains
                title="Password"
                placeholderparagraph="Enter Password"
                inputClasses="border p-2 w-full pl-[47px] font-serif"
                img={PasswordIcon}
                imgClass="w-[12%]"
                setValue={loginpassword}
                getValue={setloginPassword}
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
                onClick={() => singINWithGoogle()}
              />
              {/* <img
                src={xIcon}
                className="w-6 h-auto cursor-pointer"
                onClick={() => XAuth()}
              />
              <img
                src={github}
                className="w-6 h-auto cursor-pointer"
                onClick={() => GithubAuth()}
              /> */}
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
              setValue={signupusername}
              getValue={setsignupUsername}
            />
            <InputBox
              title="Email Address"
              placeholderparagraph="Enter email address"
              inputClasses="border p-2 w-full pl-[47px] font-serif"
              img={EmailIcon}
              imgClass="w-[12%]"
              type="email"
              setValue={signupEmail}
              getValue={setsignupEmail}
            />
            <div>
              <InputPasswordmains
                title="Password"
                placeholderparagraph="Enter Password"
                inputClasses="border p-2 w-full pl-[47px] font-serif"
                img={PasswordIcon}
                imgClass="w-[12%]"
                setValue={signuppassword}
                getValue={setsignupPassword}
              />
              <p
                className="text-right font-serif text-[#2c2c9a] cursor-pointer"
                onClick={() => setForgot(true)}>
                Forgot Password
              </p>
            </div>
            <button
              className="px-8 py-2 rounded font-semibold bg-[#2c2c9a] text-white "
              onClick={() => handleSubmitSignup()}>
              sign up
            </button>
            <hr className="font-bold" />
            <div className="flex gap-4 flex-row items-center justify-center">
              <img
                src={googleIcon}
                className="w-6 h-auto cursor-pointer"
                onClick={() => singINWithGoogle()}
              />
              {/* <img
                src={xIcon}
                className="w-6 h-auto cursor-pointer"
                onClick={() => XAuth()}
              />
              <img
                src={github}
                className="w-6 h-auto cursor-pointer"
                onClick={() => GithubAuth()}
              /> */}
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
