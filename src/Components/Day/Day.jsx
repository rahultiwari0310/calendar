import React from "react";
import DraggableEvent from "./DraggableEvent";
import DroppableSlot from "./DroppableSlot";
import DayHead from "./DayHead";
import PropTypes from "prop-types";

export default function Day(props) {
  const {
    date,
    isFirstDay,
    addOrEditEvent,
    eventsInDay,
    handleDrop,
    checkForExistingMeetings,
  } = props;

  return (
    <div className="col border">
      <DayHead date={date} />
      <div className="half-hours">
        {new Array(48).fill(1).map((it, idx) => {
          const slot = date.startOf("day").add(idx * 30, "minutes");
          return (
            <DroppableSlot
              slot={slot}
              idx={idx}
              isFirstDay={isFirstDay}
              handleDrop={handleDrop}
              addOrEditEvent={addOrEditEvent}
              key={slot.$d.getTime()}
            />
          );
        })}
        {eventsInDay.map((it) => (
          <DraggableEvent
            event={it}
            date={date}
            checkForExistingMeetings={checkForExistingMeetings}
            addOrEditEvent={addOrEditEvent}
            key={it.eventId}
          />
        ))}
      </div>
    </div>
  );
}

Day.propTypes = {
  date: PropTypes.object.isRequired,
  isFirstDay: PropTypes.bool,
  addOrEditEvent: PropTypes.func.isRequired,
  eventsInDay: PropTypes.array.isRequired,
  handleDrop: PropTypes.func.isRequired,
  checkForExistingMeetings: PropTypes.func.isRequired,
};
