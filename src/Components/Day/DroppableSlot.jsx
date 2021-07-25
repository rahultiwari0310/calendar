import React from "react";
import { Droppable } from "react-drag-and-drop";
import { timeFormat } from "../../constants";
import PropTypes from "prop-types";

export default function DroppableSlot(props) {
  const { slot, isFirstDay, addOrEditEvent, handleDrop, idx } = props;

  return (
    <Droppable
      types={["event"]}
      onDrop={(e) => {
        handleDrop(slot, e.event);
      }}
    >
      <div
        className={`half-hour half-hour-${idx % 2}`}
        onClick={(e) => addOrEditEvent({ slot })}
      >
        {isFirstDay && !(idx % 2) ? (
          <span className="half-hour-time">{slot.format(timeFormat)}</span>
        ) : null}
      </div>
    </Droppable>
  );
}

DroppableSlot.propTypes = {
  slot: PropTypes.object.isRequired,
  isFirstDay: PropTypes.bool,
  addOrEditEvent: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
  idx: PropTypes.number.isRequired,
};
