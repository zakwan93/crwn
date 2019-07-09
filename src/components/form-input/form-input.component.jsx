import React from "react";
import "./form-input.style.scss";

const FormInput = ({ handleChange, lable, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {lable ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-lable`}
      >
        {lable}
      </label>
    ) : null}
  </div>
);

export default FormInput;
