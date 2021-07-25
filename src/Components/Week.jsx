import React, { useState } from "react";
import dayjs from "dayjs";
import Day from "./Day";
import firebaseDB from "../firebase";
import { dateRangeOverlaps } from "../helpers";

export default function Week(props) {
  const { selectedWeek, addOrEditEvent, allEvents, checkForExistingMeetings } =
    props;

  const startOfWeek = dayjs().add(selectedWeek, "week").startOf("week");

  const weekdays = new Array(7)
    .fill(startOfWeek)
    .map((day, idx) => day.add(idx, "day"));

  const handleDrop = (slot, eventId) => {
    const event = allEvents[eventId];
    const { startDate, endDate } = event;
    event.startDate = slot.$d.getTime();
    event.endDate = event.startDate + (endDate - startDate);
    checkForExistingMeetings(event, eventId);
    firebaseDB.child(`events/${eventId}`).set(event, (err) => console.log(err));
  };

  const getEventsInDay = (day, events) => {
    return Object.keys(events)
      .filter((key) =>
        dateRangeOverlaps(events[key], {
          startDate: day.$d.getTime(),
          endDate: day.endOf("day").$d.getTime(),
        })
      )
      .map((key) => {
        return { ...events[key], eventId: key };
      });
  };
  return (
    <>
      <div className="row col-md-10 g-0">
        {weekdays.map((it, idx) => {
          return (
            <Day
              key={it.$d.getTime()}
              addOrEditEvent={addOrEditEvent}
              date={it}
              isFirstDay={!idx}
              eventsInDay={getEventsInDay(it, allEvents) || []}
              handleDrop={handleDrop}
              checkForExistingMeetings={checkForExistingMeetings}
            />
          );
        })}
      </div>
    </>
  );
}
