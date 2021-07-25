import dayjs from "dayjs";
import React from "react";
import ReactTooltip from "react-tooltip";
import { Draggable, Droppable } from "react-drag-and-drop";

export default function Day(props) {
  const { date, isFirstDay, addOrEditEvent, eventsInDay, handleDrop } = props;

  return (
    <div className="col border">
      <div className="day-heading">{date.format("DD MMM YYYY")}</div>
      <div className="day-heading">{date.format("dddd")}</div>
      <div className="half-hours">
        {new Array(48).fill(1).map((it, idx) => {
          const slot = date.startOf("day").add(idx * 30, "minutes");
          return (
            <Droppable
              types={["event"]}
              onDrop={(e) => {
                handleDrop(slot, e.event);
              }}
              key={slot.$d.getTime()}
            >
              <div
                className={`half-hour half-hour-${idx % 2}`}
                key={slot.$d.getTime()}
                onClick={(e) => addOrEditEvent({ slot })}
              >
                {isFirstDay && !(idx % 2) ? (
                  <span className="half-hour-time">
                    {slot.format("hh:mm A")}
                  </span>
                ) : null}
              </div>
            </Droppable>
          );
        })}
        {eventsInDay.map((it) => {
          return (
            <div
              key={it.eventId}
              className="event-in-day"
              style={{
                height:
                  ((it.endDate - it.startDate) / (1000 * 60 * 30)) * 20 + "px",
                top:
                  ((it.startDate - date.startOf("day").$d.getTime()) /
                    (1000 * 60 * 30)) *
                    20 +
                  "px",
              }}
              data-for={it.eventId}
              data-tip
              onClick={(e) => addOrEditEvent({ ...it })}
            >
              <Draggable type="event" data={it.eventId}>
                <div className="event-content">
                  <div className="event-title">{it.title}</div>
                  <div className="event-time">
                    {dayjs(it.startDate).format("hh:mm")} -{" "}
                    {dayjs(it.endDate).format("hh:mm A")}
                  </div>
                </div>
              </Draggable>

              <ReactTooltip
                id={it.eventId}
                effect="solid"
                clickable
                offset={{ top: 0, left: 0 }}
              >
                <p>Title: {it.title}</p>
                <p>Owner: {it.owner}</p>
                <p>
                  Time: {dayjs(it.startDate).format("DD MMM YYYY hh:mm A")} -{" "}
                  {dayjs(it.endDate).format("DD MMM YYYY hh:mm A")}
                </p>
                {it.theme ? <p>Theme: {it.theme}</p> : null}
              </ReactTooltip>
            </div>
          );
        })}
      </div>
    </div>
  );
}
