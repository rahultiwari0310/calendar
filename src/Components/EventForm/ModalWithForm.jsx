import React from "react";
import Form from "./Form";
import Modal from "./Modal";
import PropTypes from "prop-types";

export default function ModalWithForm({
  closeModal,
  checkForExistingMeetings,
  modalPayload,
}) {
  const { isOpen, slot, ...modalFormProps } = modalPayload;
  return (
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
  );
}

ModalWithForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  checkForExistingMeetings: PropTypes.func.isRequired,
  modalPayload: PropTypes.object.isRequired,
};
