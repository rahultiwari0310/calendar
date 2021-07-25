import React from "react";
import dayjs from "dayjs";
import PropTypes from "prop-types";

export default function CreateEvent({ addOrEditEvent }) {
  const now = dayjs();

  return (
    <div className="create-event">
      <button
        type="button"
        className="btn btn-success"
        onClick={(e) =>
          addOrEditEvent({
            slot:
              now.get("minutes") > 30
                ? now.add(1, "hour").startOf("hour")
                : now.set("minute", 30),
          })
        }
      >
        + Create Event
      </button>
    </div>
  );
}

CreateEvent.propTypes = {
  addOrEditEvent: PropTypes.func.isRequired,
};
