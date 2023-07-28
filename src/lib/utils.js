import React from "react";

const InputWrapper = ({
  rootClassName = "",
  labelClass = "",
  validClass = "",
  inputClass = "",
  label = "",
  placeholder = "",
  validMessage = null,
  InputComponent = null,
  ...inputProps
}) => {
  return (
    <div className={`${rootClassName}`}>
      <p className={`ma0 mb2 f6 ${labelClass}`}>{label}</p>
      {InputComponent ? (
        InputComponent
      ) : (
        <input
          className={`input ${inputClass}`}
          placeholder={placeholder}
          {...inputProps}
        />
      )}
      {validMessage ? (
        <p className={`mt1 f5 danger-red ${validClass}`}>{validMessage}</p>
      ) : null}
    </div>
  );
};

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const regexPhone = /^[6789]\d{9}$/;

const regexZip = /^\d{5}(?:[-\s]\d{4})?$/;

const handleScroll = hide => {
  if (hide) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflowY = "scroll";
  }
};

export {
  InputWrapper,
  emailRegex,
  handleScroll,
  regexPhone,
  regexZip,
};
