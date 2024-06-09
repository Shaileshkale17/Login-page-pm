import React, { useState } from "react";
import PasswordIcon from "../assets/password-svgrepo-com.svg";
import enyclosedIcon from "../assets/eye-closed-svgrepo-com.svg";
import enyIcon from "../assets/eye-svgrepo-com.svg";

const InputPassword = ({
  imgClass,
  inputClasses,
  placeholderparagraph,
  getValue,
  setValue,
  names,
  ids,
}) => {
  const [Eye, setEye] = useState(false);
  return (
    <div className="relative flex flex-row">
      <img
        src={PasswordIcon}
        alt="Password icon"
        className={`absolute ${imgClass} p-3`}
      />
      <input
        className={`p-2 ${inputClasses}`}
        type={Eye === false ? "Password" : "text"}
        name={names}
        id={ids}
        value={setValue}
        onChange={(e) => getValue(e.target.value)}
        placeholder={placeholderparagraph}
      />
      {Eye === false ? (
        <img
          src={enyclosedIcon}
          alt="Password icon"
          className={`absolute ${imgClass} p-3 right-0`}
          onClick={() => setEye(true)}
        />
      ) : (
        <img
          src={enyIcon}
          alt="Password icon"
          className={`absolute ${imgClass} p-3 right-0`}
          onClick={() => setEye(false)}
        />
      )}
    </div>
  );
};

export default InputPassword;
