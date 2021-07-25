import React from "react";
import Day from "../Day/Day";
import { createUpdateEvent } from "../../firebase";
import { getEventsInDay, getWeekdays } from "../../helpers";
import PropTypes from "prop-types";

export default function Week(props) {
  const { selectedWeek, addOrEditEvent, allEvents, checkForExistingMeetings } =
    props;

  return (
    <div className="row col-md-10 g-0">
      {getWeekdays(selectedWeek).map((it, idx) => {
        return (
          <Day
            key={it.$d.getTime()}
            addOrEditEvent={addOrEditEvent}
            date={it}
            isFirstDay={!idx}
            eventsInDay={getEventsInDay(it, allEvents) || []}
            handleDrop={updateEventAsPerDrop(
              allEvents,
              checkForExistingMeetings
            )}
            checkForExistingMeetings={checkForExistingMeetings}
          />
        );
      })}
    </div>
  );
}

Week.propTypes = {
  selectedWeek: PropTypes.number.isRequired,
  addOrEditEvent: PropTypes.func.isRequired,
  checkForExistingMeetings: PropTypes.func.isRequired,
  allEvents: PropTypes.object.isRequired,
};

export const updateEventAsPerDrop = (allEvents, checkForExistingMeetings) => {
  return function (slot, eventId) {
    //Dropped event
    const event = allEvents[eventId];
    const { startDate, endDate } = event;

    //Updated start time where event was dropped
    event.startDate = slot.$d.getTime();

    //End time calculated by the duration of dropped event
    event.endDate = event.startDate + (endDate - startDate);

    //Alert for conflicts
    checkForExistingMeetings(event, eventId);

    //handle DB update
    createUpdateEvent(event, eventId);
  };
};
