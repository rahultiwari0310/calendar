import React from "react";
import CreateEvent from "./CreateEvent";
import PropTypes from "prop-types";

export default function AppHead({ addOrEditEvent }) {
  return (
    <div className="app-head">
      <h1>
        <i className="fas fa-calendar-alt"></i> Weekly Calendar
      </h1>
      <CreateEvent addOrEditEvent={addOrEditEvent} />
    </div>
  );
}

AppHead.propTypes = {
  addOrEditEvent: PropTypes.func.isRequired,
};
