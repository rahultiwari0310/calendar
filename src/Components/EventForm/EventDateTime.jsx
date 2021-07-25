import React from "react";
import DatetimeRangePicker from "react-datetime-range-picker";
import Label from "./Label";
import PropTypes from "prop-types";

export default function EventDate(props) {
  const { startDate, endDate, onChange } = props;

  return (
    <div className="field mb-3">
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

EventDate.propTypes = {
  startDate: PropTypes.object.isRequired,
  endDate: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
