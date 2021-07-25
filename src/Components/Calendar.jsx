import React, { useEffect, useState } from "react";
import WeeksAndNav from "./Sections/WeeksAndNav";
import AppHead from "./Sections/AppHead";
import ModalWithForm from "./EventForm/ModalWithForm";
import { subscribeToEvents } from "../firebase";
import { checkConflicts } from "../helpers";

export default function Calendar() {
  const [selectedWeek, changeWeek] = useState(0);
  const [modalPayload, setModalState] = useState({});
  const [allEvents, setEvents] = useState({});

  //Open modal with initial values
  const addOrEditEvent = (payload) => {
    setModalState({
      isOpen: true,
      ...payload,
    });
  };

  //subscribe to events firebase data
  useEffect(() => subscribeToEvents(setEvents), []);

  const checkForExistingMeetings = (event, eventId, hideAlert) =>
    checkConflicts(event, allEvents, eventId, hideAlert);

  const closeModal = (e) =>
    setModalState({ ...modalPayload, isOpen: !modalPayload.isOpen });

  return (
    <>
      <AppHead addOrEditEvent={addOrEditEvent} />

      <div className="calendar-container row">
        <WeeksAndNav
          changeWeek={changeWeek}
          addOrEditEvent={addOrEditEvent}
          allEvents={allEvents}
          checkForExistingMeetings={checkForExistingMeetings}
          selectedWeek={selectedWeek}
        />
        <ModalWithForm
          closeModal={closeModal}
          checkForExistingMeetings={checkForExistingMeetings}
          modalPayload={modalPayload}
        />
      </div>
    </>
  );
}
