import styles from "../Filter/Filter.module.css";
import { MdKeyboardArrowDown } from "../Icons/Icons";
import { useState } from "react";
import { PriceModal } from "../PriceModal/PriceModal";
import { HouseTypeModal } from "../HouseTypeModal/HouseTypeModal";
import { useFilter } from "../../Context/Filter/FilterContext";
import { DateModal } from "../DateModal/DateModal";
const Filter = () => {
  const [show, setShow] = useState(false);
  const [Priceshow, setPriceShow] = useState(false);
  const [Dateshow, setDateShow] = useState(false);
  const { dispatch, InitialState } = useFilter();
  return (
    <div
      className={`flex   btn-padding ${styles.filterSection} border-radius1 flex-space-between `}
    >
      <div className={` padding1 ${styles.filters} `}>
        <div className="text-color font-bolder">Location</div>
        <div>
          <div className=" font-bolder">New York,USA</div>
        </div>
      </div>

      <div className={` padding1 ${styles.filters} `}>
        <div className="text-color font-bolder">When</div>
        <div className="flex gap1">
          {" "}
          <div className=" font-bolder">Select  Date</div>
          <MdKeyboardArrowDown
            onClick={() => setDateShow((prev) => !prev)}
            size={22}
            className="pointer icon-color icon-border"
          />
        </div>
      </div>

      <div className={` padding1 ${styles.filters} `}>
        <div className="text-color font-bolder">Price</div>
        <div className="flex gap1">
          {" "}
          <div className=" font-bolder">all</div>
          <MdKeyboardArrowDown
            onClick={() => setShow((prev) => !prev)}
            size={22}
            className="pointer icon-color icon-border"
          />
        </div>
      </div>

      <div className={` padding1 ${styles.filters} `}>
        <div className="text-color font-bolder">Property Type</div>
        <div className="flex gap1">
          {" "}
          <div className=" font-bolder">Home Type</div>
          <MdKeyboardArrowDown
            onClick={() => setPriceShow((prev) => !prev)}
            size={22}
            className="pointer icon-color icon-border"
          />
        </div>
      </div>

      <div className="btn-padding">
        <form>
          <button
            onClick={() => dispatch({ type: "CLEAR", payload: InitialState })}
            className={`btn-padding pointer border-radius1 btn-primary font-bolder`}
          >
            CLEAR
          </button>
        </form>
      </div>
      {show && <PriceModal />}
      {Priceshow && <HouseTypeModal />}
      {Dateshow && <DateModal />}
    </div>
  );
};

export { Filter };
