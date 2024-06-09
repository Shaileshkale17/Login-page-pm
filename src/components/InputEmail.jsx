import React from "react";

const InputEmail = ({
  img,
  imgClass,
  inputClasses,
  placeholderparagraph,
  getValue,
  setValue,
  names,
  ids,
  type = "text",
}) => {
  return (
    <div className="relative flex flex-row">
      <img src={img} alt="Email icon" className={`absolute ${imgClass} p-3`} />
      <input
        className={`p-2 ${inputClasses}`}
        type={type}
        name={names}
        id={ids}
        value={setValue}
        onChange={(e) => getValue(e.target.value)}
        placeholder={placeholderparagraph}
      />
    </div>
  );
};

export default InputEmail;
