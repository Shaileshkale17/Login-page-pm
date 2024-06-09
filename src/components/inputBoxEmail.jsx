import React from "react";
import InputEmail from "./InputEmail";

const InputBox = ({
  title,
  placeholderparagraph,
  name,
  ids,
  setValue,
  getValue,
  inputClasses,
  img,
  imgClass,
  type,
}) => {
  return (
    <>
      <div className="flex flex-col gap-2 relative">
        <label htmlFor={ids} className="font-serif">
          {title}
        </label>
        <InputEmail
          img={img}
          imgClass={imgClass}
          inputClasses={inputClasses}
          placeholderparagraph={placeholderparagraph}
          getValue={getValue}
          setValue={setValue}
          names={name}
          ids={ids}
          type={type}
        />
      </div>
    </>
  );
};

export default InputBox;
