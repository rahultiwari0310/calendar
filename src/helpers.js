import dayjs from "dayjs";

export const checkConflicts = (event, allEvents, _id) => {
  const conflicts = Object.keys(allEvents).filter((eventId) => {
    const existingEvent = allEvents[eventId];
    return (Math.max(Math.min(event.endDate, existingEvent.endDate)-Math.max(event.startDate, existingEvent.startDate),0) > 0 &&
      eventId !== _id
    );
  });
  if (conflicts.length) {
    const existingEvent = allEvents[conflicts[0]];
    window.alert(
      `There is already a meeting "${existingEvent.title}" starting at ${dayjs(
        existingEvent.startDate
      ).format("DD/MM/YYYY hh:mm A")}`
    );
  }
  return conflicts;
};
