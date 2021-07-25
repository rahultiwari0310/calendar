import React, { useEffect, useState } from "react";
import Week from "./Week";
import Navigation from "./Navigation";
import Modal from "./Modal";
import CreateEvent from "./CreateEvent";
import Form from "./Form";
import firebaseDB from "../firebase";
import dayjs from "dayjs";
import { checkConflicts } from "../helpers";

export default function Calendar(props) {
  const [selectedWeek, changeWeek] = useState(0);
  const [modalPayload, setModalState] = useState({});
  const [allEvents, setEvents] = useState({});
  const addOrEditEvent = (payload) => {
    setModalState({
      isOpen: true,
      ...payload,
    });
  };

  useEffect(() => {
    firebaseDB.child("events").on("value", (snapshot) => {
      const value = snapshot.val();
      if (value) {
        setEvents({ ...value });
      }
    });
  }, []);

  const checkForExistingMeetings = (event, eventId) =>
    checkConflicts(event, allEvents, eventId);
  const { isOpen, slot, ...modalFormProps } = modalPayload;

  const closeModal = (e) => setModalState({ ...modalPayload, isOpen: !isOpen });

  return (
    <>
      <h1>Calendar</h1>
      <CreateEvent addOrEditEvent={addOrEditEvent} />
      <div className="calendar-container row">
        <Navigation onClick={(e) => changeWeek(selectedWeek - 1)} icon="left" />
        <Week
          selectedWeek={selectedWeek}
          addOrEditEvent={addOrEditEvent}
          allEvents={allEvents}
          checkForExistingMeetings={checkForExistingMeetings}
        />
        <Navigation
          onClick={(e) => changeWeek(selectedWeek + 1)}
          icon="right"
        />
        <Modal
          modalIsOpen={isOpen}
          closeModal={closeModal}
          title="Enter event details"
        >
          <Form
            checkForExistingMeetings={checkForExistingMeetings}
            slot={slot}
            {...modalFormProps}
            closeModal={closeModal}
          />
        </Modal>
      </div>
    </>
  );
}
