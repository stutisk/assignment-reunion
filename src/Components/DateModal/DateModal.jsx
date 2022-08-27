import { useFilter } from "../../Context/Filter/FilterContext";
import styles from "../DateModal/DateModal.module.css";
const DateModal = () => {
  const DateHandler = (e) => {
    const{dispatch}=useFilter();
    if (e.target.checked) {
      dispatch({ type: e.target.name, payload: e.target.value });
    }
  };
  return (
    <div>
      <div className={`${styles.DateModal} border-radius1 btn-padding  `}>
        <form className="pricelist">
          <div className=" margin-top">
            {" "}
            <label for="date">
              <input
                onChange={(e) => DateHandler(e)}
                type="radio"
                name="DATE"
                value={"28-Aug-2022"}
                className="pointer"
              />
              28-Aug-2022
            </label>
          </div>
          <div className=" margin-top">
            {" "}
            <label for="price">
              <input
                onChange={(e) => DateHandler(e)}
                type="radio"
                name="DATE"
                value={"29-Aug-2022"}
                className="pointer"
              />
              29-Aug-2022
            </label>
          </div>
          <div className=" margin-top">
            {" "}
            <label for="price">
              <input
                onChange={(e) => DateHandler(e)}
                type="radio"
                name="DATE"
                value={"30-Aug-2022"}
                className="pointer"
              />
              30-Aug-2022
            </label>
          </div>
          <div className=" margin-top">
            {" "}
            <label for="price">
              <input
                onChange={(e) => DateHandler(e)}
                type="radio"
                name="DATE"
                value={"31-Aug-2022"}
                className="pointer"
              />
              31-Aug-2022
            </label>
          </div>
          <div className=" margin-top">
            {" "}
            <label for="price">
              <input
                onChange={(e) => DateHandler(e)}
                type="radio"
                name="DATE"
                value={"1-Sep-2022"}
                className="pointer"
              />
              1-Sep-2022
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export { DateModal };
