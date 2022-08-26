import { useFilter } from "../../Context/Filter/FilterContext";
import styles from "../HouseTypeModal/HouseTypeModal.module.css";
const HouseTypeModal = () => {
  const{dispatch}=useFilter();
  const categoryRatingsHandler = (e) => {
 
    if (e.target.checked) {
      dispatch({ type: e.target.name, payload: e.target.value });
    } else {
      dispatch({ type: "REMOVE-CATEGORY", payload: e.target.value });
    }
  };
  return (
    <div className={`${styles.housetypeModal} border-radius1 btn-padding `}>
      <form>
        <div className=" margin-top">
          {" "}
          <label for="houseType">
            <input
              onChange={(e) => categoryRatingsHandler(e)}
              type="checkbox"
              name="HOUSE"
              value="Townhomes"
              className="pointer"
            />
            Townhomes
          </label>
        </div>
        <div className=" margin-top">
          {" "}
          <label for="houseType">
            <input
              onChange={(e) => categoryRatingsHandler(e)}
              type="checkbox"
              name="HOUSE"
              value="Multi-family"
              className="pointer"
            />
            Multi-family
          </label>
        </div>
        <div className=" margin-top">
          {" "}
          <label for="houseType">
            <input
              onChange={(e) => categoryRatingsHandler(e)}
              type="checkbox"
              name="HOUSE"
              value="Lots/Land"
              className="pointer"
            />
            Lots/Land
          </label>
        </div>
        <div className=" margin-top">
          {" "}
          <label for="houseType">
            <input
              onChange={(e) => categoryRatingsHandler(e)}
              type="checkbox"
              name="HOUSE"
              value="Appartment"
              className="pointer"
            />
            Appartment
          </label>
        </div>
      </form>
    </div>
  );
};
export { HouseTypeModal };
