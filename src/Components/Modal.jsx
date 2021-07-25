import Modal from "react-modal";

export default function EventModal(props) {
  const { children, modalIsOpen, closeModal, title } = props;
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel={title}
      style={{
        content: {
          width: "50%",
          height: "70vh",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      {children}
    </Modal>
  );
}
