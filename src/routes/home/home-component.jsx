import { Link } from "react-router-dom";
import { Fragment, useContext, useState } from "react";

import Button from "../../components/button/button-component";
import SearchBox from "../../components/search-box/search-box-component";
import TollsDropdown from "../../components/tolls-dropdown/tolls-dropdown-component";
import NewTollModal from "../../components/addNewToll/newTollModal-component";
import AddVehicleModal from "../../components/addVehicle/addVehicleModal-component";

import "./home-styles.scss";

const Home = () => {
  const [isTollDropdownOpen, setIsTollDropdownOpen] = useState(false);
  const [addNewTollModalShown, setAddNewTollModalShown] = useState(false);
  const [addVehicleModalShown, setAddVehicleModalShown] = useState(false);

  const handleToggleDropdown = () => {
    setIsTollDropdownOpen((prevTollDropdownState) => !prevTollDropdownState);
  };

  return (
    <div>
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Toll entries / vehicle entries</span>
          </div>

          <div className="header-block">
            <span onClick={handleToggleDropdown}>Icon</span>
          </div>
          <div className="header-block">
            <SearchBox
              // onChangeHandler={onSearchChange}
              placeholder="search vehicle"
              className="search-box"
            ></SearchBox>
          </div>

          <div className="header-block">
            <Button
              onClick={() => {
                setAddVehicleModalShown(!addVehicleModalShown);
              }}
            >
              Add vehicle entry
            </Button>
          </div>

          <div className="header-block">
            <Button
              onClick={() => {
                setAddNewTollModalShown(!addNewTollModalShown);
              }}
            >
              Add new toll
            </Button>
          </div>

          <div className="header-block">
            <Link to="/AllTolls">
              <Button>View all tolls</Button>
            </Link>
          </div>
        </div>
      </div>

      <div>{isTollDropdownOpen && <TollsDropdown></TollsDropdown>}</div>

      <div className="checkout1-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Vehicle Type</span>
          </div>
          <div className="header-block">
            <span>Vehicle Number</span>
          </div>

          <div className="header-block">
            <span>Date/Time</span>
          </div>

          <div className="header-block">
            <span>Toll name</span>
          </div>

          <div className="header-block">
            <span>Tariff</span>
          </div>
        </div>
      </div>

      <NewTollModal
        shown={addNewTollModalShown}
        close={() => {
          setAddNewTollModalShown(false);
        }}
      ></NewTollModal>

      <AddVehicleModal
        shown={addVehicleModalShown}
        close={() => {
          setAddVehicleModalShown(false);
        }}
      ></AddVehicleModal>
    </div>
  );
};

export default Home;
