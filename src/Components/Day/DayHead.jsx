import React from "react";
import { dateFormat } from "../../constants";
import PropTypes from "prop-types";

export default function DayHead(props) {
  const { date } = props;

  return (
    <>
      <div className="day-heading">{date.format(dateFormat)}</div>
      <div className="day-heading">{date.format("dddd")}</div>
    </>
  );
}

DayHead.propTypes = {
  date: PropTypes.object.isRequired,
};
