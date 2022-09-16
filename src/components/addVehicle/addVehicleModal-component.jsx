const AddVehicleModal = ({ shown, close }) => {
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <button onClick={close}>Close</button>
      </div>
    </div>
  ) : null;
};

export default AddVehicleModal;
