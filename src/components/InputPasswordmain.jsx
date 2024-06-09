import React from "react";
import PasswordIcon from "../assets/password-svgrepo-com.svg";
import InputPassword from "./inputPassword";

const InputPasswordmains = ({
  title,
  placeholderparagraph,
  name,
  ids,
  setValue,
  getValue,
  inputClasses,

  imgClass,
  Clickit,
  gitClickit,
}) => {
  return (
    <>
      <div className="flex flex-col gap-2 relative">
        <label htmlFor={ids} className="font-serif">
          {title}
        </label>
        <InputPassword
          imgClass={imgClass}
          inputClasses={inputClasses}
          placeholderparagraph={placeholderparagraph}
          getValue={getValue}
          setValue={setValue}
          names={name}
          ids={ids}
        />
      </div>
    </>
  );
};

export default InputPasswordmains;
