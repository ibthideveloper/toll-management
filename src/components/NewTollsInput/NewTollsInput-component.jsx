import "./NewTollsInput-styles.scss";

const NewTollsInput = () => {
  return (
    <div className="new-tolls-input">
      <select>
        <option value="" disabled selected>
          Select Vehicle Type
        </option>
        <option value="fruit">Car/Jeep/Van</option>
        <option value="vegetable">LCV</option>
        <option value="meat">Truck/Bus</option>
        <option value="meat">Heavy vehicle</option>
      </select>

      <input type="number" required />

      <input type="number" required />
    </div>
  );
};

export default NewTollsInput;
