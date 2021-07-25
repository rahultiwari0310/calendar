import React from "react";
import Label from "./Label";
import PropTypes from "prop-types";

export default function InputText({
  placeholder,
  value,
  onChange,
  name,
  label,
  required,
}) {
  return (
    <div className="mb-3">
      <Label label={label} labelFor={name} />
      <input
        type="text"
        className="form-control"
        required={required}
        {...{
          placeholder,
          value,
          onChange: (e) => onChange(e.currentTarget.value),
          id: name,
        }}
      />
    </div>
  );
}

InputText.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};
