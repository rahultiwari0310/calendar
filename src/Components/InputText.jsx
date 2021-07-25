import React from "react";
import Label from "./Label";
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
