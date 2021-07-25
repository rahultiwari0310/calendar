import React from "react";
import { Draggable } from "react-drag-and-drop";
import { getStyles } from "../../helpers";
import EventTooltip from "./EventTooltip";
import EventItem from "./EventItem";

import PropTypes from "prop-types";

export default function DraggableEvent({
  date,
  addOrEditEvent,
  event,
  checkForExistingMeetings,
}) {
  const conflicts = checkForExistingMeetings(event, event.eventId, true);
  const sortedEventKeys = [...conflicts, event.eventId].sort((a, b) =>
    a.localeCompare(b)
  );
  const positionForCurrentEvent = sortedEventKeys.indexOf(event.eventId);
  return (
    <div
      className="event-in-day"
      style={getStyles(event, conflicts, positionForCurrentEvent, date)}
      data-for={event.eventId}
      data-tip
      onClick={(e) => addOrEditEvent({ ...event })}
    >
      <Draggable type="event" data={event.eventId}>
        <EventItem event={event} />
      </Draggable>
      <EventTooltip {...event} />
    </div>
  );
}

DraggableEvent.propTypes = {
  date: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired,
  checkForExistingMeetings: PropTypes.func.isRequired,
  addOrEditEvent: PropTypes.func.isRequired,
};
