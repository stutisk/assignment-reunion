import { useFilter } from "../../Context/Filter/FilterContext";
import styles from "../PriceModal/PriceModal.module.css";
const PriceModal = () => {
  const { dispatch } = useFilter();

  const categoryRatingsHandler = (e) => {
    if (e.target.checked) {
      dispatch({ type: e.target.name, payload: e.target.value });
    } else {
      dispatch({ type: "REMOVE-CATEGORY", payload: e.target.value });
    }
  };

  return (
    <div className={`${styles.priceModal} border-radius1 btn-padding  `}>
      <form className="pricelist">
        <div className=" margin-top">
          {" "}
          <label for="price">
            <input
              onChange={(e) => categoryRatingsHandler(e)}
              type="radio"
              name="PRICE"
              value={6000}
              className="pointer"
            />
            6000+
          </label>
        </div>
        <div className=" margin-top">
          {" "}
          <label for="price">
            <input
              onChange={(e) => categoryRatingsHandler(e)}
              type="radio"
              name="PRICE"
              value={1000}
              className="pointer"
            />
            1000+
          </label>
        </div>
      </form>
    </div>
  );
};
export { PriceModal };
