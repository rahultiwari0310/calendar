import React, { useState } from "react";
import EventDateTime from "./EventDateTime";
import InputText from "./InputText";
import { createUpdateEvent, removeEvent } from "../../firebase";
import PropTypes from "prop-types";

export default function Form({
  slot,
  closeModal,
  startDate,
  endDate,
  title,
  owner,
  theme,
  eventId,
  checkForExistingMeetings,
}) {
  const [formValues, setFormValues] = useState({
    startDate: new Date(startDate || slot.$d),
    endDate: new Date(endDate || slot.add(1, "hour").$d),
    title,
    theme,
    owner,
  });

  const updateFormValues = (payload) =>
    setFormValues({ ...formValues, ...payload });

  const handleSubmit = (e) => {
    e.preventDefault();
    const start = formValues.startDate;
    const end = formValues.endDate;
    const updatedEvent = {
      ...formValues,
      theme: formValues.theme || null,
      startDate: start.getTime(),
      endDate: end.getTime(),
    };
    checkForExistingMeetings(updatedEvent, eventId);
    createUpdateEvent(updatedEvent, eventId);
    closeModal();
  };

  const handleDelete = () => removeEvent(eventId, closeModal);

  return (
    <div className="form-fields">
      <h3 className="event-form-heading">Event</h3>
      {eventId ? (
        <div className="event-actions">
          <i onClick={handleDelete} className={`fas fa-trash delete-event`} />
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <EventDateTime
          startDate={formValues.startDate}
          endDate={formValues.endDate}
          onChange={(e) =>
            updateFormValues({ endDate: e.end, startDate: e.start })
          }
        />
        <InputText
          placeholder={"Enter event title"}
          value={formValues.title}
          onChange={(title) => updateFormValues({ title })}
          label="Title"
          name="title"
          required
        />
        <InputText
          placeholder={"Enter owner name"}
          value={formValues.owner}
          onChange={(owner) => updateFormValues({ owner })}
          label="Owner"
          name="owner"
          required
        />
        <InputText
          placeholder={"Enter theme"}
          value={formValues.theme}
          onChange={(theme) => updateFormValues({ theme })}
          label="Theme"
          name="theme"
        />
        <button type="submit" className="btn btn-info">
          Save
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  slot: PropTypes.object,
  closeModal: PropTypes.func.isRequired,
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  title: PropTypes.string,
  owner: PropTypes.string,
  theme: PropTypes.string,
  eventId: PropTypes.string,
  checkForExistingMeetings: PropTypes.func.isRequired,
};
