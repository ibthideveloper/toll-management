import "./newTollModal-styles.scss";

import Button from "../button/button-component";
import NewTollsInput from "../NewTollsInput/NewTollsInput-component";

const NewTollModal = ({ shown, close }) => {
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
        <button onClick={close}>X</button>

        <div>
          <label>Toll Name</label>
          <br></br>
          <input required />
          <br></br>
          <label>Vehicle Fare Details</label>
          <br></br>

          <div>
            <NewTollsInput></NewTollsInput>
            <NewTollsInput></NewTollsInput>
            <NewTollsInput></NewTollsInput>
            <NewTollsInput></NewTollsInput>
          </div>

          <div className="add-details-button">
            <Button> Add details</Button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default NewTollModal;
