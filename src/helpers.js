import dayjs from "dayjs";
import { dateTimeFormat } from "./constants";

//Checks for a given event duration if another existing event overlaps
export const checkConflicts = (event, allEvents, _id, hideAlert) => {
  //check against all events whether time overlaps
  const conflicts = Object.keys(allEvents).filter((eventId) => {
    const existingEvent = allEvents[eventId];
    return dateRangeOverlaps(event, existingEvent) && eventId !== _id;
  });

  //if overlaps show alert
  if (conflicts.length) {
    const existingEvent = allEvents[conflicts[0]];
    !hideAlert &&
      window.alert(
        `There is already a meeting "${
          existingEvent.title
        }" starting at ${dayjs(existingEvent.startDate).format(dateTimeFormat)}`
      );
  }
  return conflicts;
};

//Returns true if two date ranges overlap
export const dateRangeOverlaps = (date1, date2) => {
  return (
    Math.max(
      Math.min(date1.endDate, date2.endDate) -
        Math.max(date1.startDate, date2.startDate),
      0
    ) > 0
  );
};

//Returns styles for events to be placed on a given date
export const getStyles = (event, conflicts, postion, date) => {
  const startOfDay = date.startOf("day").$d.getTime();
  const endOfDay = date.endOf("day").$d.getTime();

  //Event start on event time or day start -- Required if event exists in two days
  const eventStartDate = Math.max(event.startDate, startOfDay);

  //Event ends of eventend time or day end -- Required if event exists in two days
  const eventEndDate = Math.min(event.endDate, endOfDay);

  //Height for every half hour depicted in 20px
  const height =
    ((eventEndDate - eventStartDate) / (1000 * 60 * 30)) * 20 + "px";

  //Position for every half hour depicted in 20px
  const top =
    ((eventStartDate - date.startOf("day").$d.getTime()) / (1000 * 60 * 30)) *
      20 +
    "px";

  //Adjust left position as per no. of conflicting meetings within a slot
  const left = (100 / (conflicts.length + 1)) * postion + "%";

  //Adjust width as per no. of conflicting meetings within a slot
  const width = 100 / (conflicts.length + 1) + "%";

  return {
    width,
    top,
    height,
    left,
  };
};

//Returns event overlapping within a day range
export const getEventsInDay = (day, events) => {
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

//Returns array of 7 days in a selected week
export const getWeekdays = (week) => {
  const startOfWeek = dayjs().add(week, "week").startOf("week");

  return new Array(7).fill(startOfWeek).map((day, idx) => day.add(idx, "day"));
};
