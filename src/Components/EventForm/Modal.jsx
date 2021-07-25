import Modal from "react-modal";
import PropTypes from "prop-types";

export default function EventModal(props) {
  const { children, modalIsOpen, closeModal, title } = props;
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel={title}
      style={{
        content: modalStyles,
      }}
    >
      {children}
    </Modal>
  );
}

const modalStyles = {
  width: "50%",
  height: "70vh",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

EventModal.propTypes = {
  children: PropTypes.object,
  modalIsOpen: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string,
};
