import dayjs from "dayjs";

export const checkConflicts = (event, allEvents, _id, hideAlert) => {
  const conflicts = Object.keys(allEvents).filter((eventId) => {
    const existingEvent = allEvents[eventId];
    return dateRangeOverlaps(event, existingEvent) && eventId !== _id;
  });
  if (conflicts.length) {
    const existingEvent = allEvents[conflicts[0]];
    !hideAlert &&
      window.alert(
        `There is already a meeting "${
          existingEvent.title
        }" starting at ${dayjs(existingEvent.startDate).format(
          "DD/MM/YYYY hh:mm A"
        )}`
      );
  }
  return conflicts;
};

export const dateRangeOverlaps = (date1, date2) => {
  return (
    Math.max(
      Math.min(date1.endDate, date2.endDate) -
        Math.max(date1.startDate, date2.startDate),
      0
    ) > 0
  );
};
