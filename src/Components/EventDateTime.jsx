import React, { useState } from "react";
import DatetimeRangePicker from "react-datetime-range-picker";
import Label from "./Label";
export default function EventDate(props) {
  const { startDate, endDate, onChange } = props;

  return (
    <div className="field">
      <Label label="Select date and time" />
      <DatetimeRangePicker
        onChange={onChange}
        pickerClassName="pickers"
        className="date-time-input"
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
}
