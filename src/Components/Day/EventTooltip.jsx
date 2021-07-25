import React from "react";
import dayjs from "dayjs";
import ReactTooltip from "react-tooltip";
import { dateTimeFormat } from "../../constants";

import PropTypes from "prop-types";

export default function EventTooltip({
  eventId,
  title,
  owner,
  startDate,
  endDate,
  theme,
}) {
  return (
    <ReactTooltip
      id={eventId}
      effect="solid"
      clickable
      offset={{ top: 0, left: 0 }}
    >
      <p>Title: {title}</p>
      <p>Owner: {owner}</p>
      <p>
        Time: {dayjs(startDate).format(dateTimeFormat)} -{" "}
        {dayjs(endDate).format(dateTimeFormat)}
      </p>
      {theme ? <p>Theme: {theme}</p> : null}
    </ReactTooltip>
  );
}

EventTooltip.propTypes = {
  event: PropTypes.object.isRequired,
  eventId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  startDate: PropTypes.number.isRequired,
  endDate: PropTypes.number.isRequired,
  theme: PropTypes.string,
};
