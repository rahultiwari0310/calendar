import dayjs from "dayjs";
import React from "react";
import { timeFormat } from "../../constants";

import PropTypes from "prop-types";

export default function EventItem({ event }) {
  return (
    <div className="event-content">
      <div className="event-title">{event.title}</div>
      <div className="event-time">
        {dayjs(event.startDate).format("hh:mm")} -{" "}
        {dayjs(event.endDate).format(timeFormat)}
      </div>
    </div>
  );
}

EventItem.propTypes = {
  event: PropTypes.object.isRequired,
};
