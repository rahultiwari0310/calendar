import React from "react";
import Navigation from "./Navigation";
import Week from "./Week";
import PropTypes from "prop-types";

export default function WeeksAndNav({
  changeWeek,
  selectedWeek,
  addOrEditEvent,
  checkForExistingMeetings,
  allEvents,
}) {
  return (
    <>
      <Navigation onClick={(e) => changeWeek(selectedWeek - 1)} icon="left" />
      <Week
        selectedWeek={selectedWeek}
        addOrEditEvent={addOrEditEvent}
        allEvents={allEvents}
        checkForExistingMeetings={checkForExistingMeetings}
      />
      <Navigation onClick={(e) => changeWeek(selectedWeek + 1)} icon="right" />
    </>
  );
}

WeeksAndNav.propTypes = {
  changeWeek: PropTypes.func.isRequired,
  selectedWeek: PropTypes.number.isRequired,
  addOrEditEvent: PropTypes.func.isRequired,
  checkForExistingMeetings: PropTypes.func.isRequired,
  allEvents: PropTypes.object.isRequired,
};
