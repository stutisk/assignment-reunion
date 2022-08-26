import { useFilter } from "../../Context/Filter/FilterContext";
import styles from "../PriceModal/PriceModal.module.css";
const PriceModal = () => {
  const { dispatch } = useFilter();
  const PriceHandler = (e) => {
    if (e.target.checked) {
      dispatch({ type: PRICE, payload: e.target.value });
    } else {
      dispatch({ type: "REMOVE-CATEGORY", payload: e.target.value });
    }
  };
  return (
    <div className={`${styles.priceModal} border-radius1 btn-padding  `}>
      <form className="pricelist">
        <div>
          <label for="price">
            <input
              onChange={(e) => PriceHandler(e)}
              type="radio"
              name="Price"
              value="brands"
              className="pointer"
            />
            $500-$1000
          </label>
        </div>
        <div className=" margin-top">
          {" "}
          <label for="price">
            <input
              onChange={(e) => PriceHandler(e)}
              type="radio"
              name="Price"
              value="brands"
              className="pointer"
            />
            $1000-$1500
          </label>
        </div>
        <div className=" margin-top">
          {" "}
          <label for="price">
            <input
              onChange={(e) => PriceHandler(e)}
              type="radio"
              name="Price"
              value="brands"
              className="pointer"
            />
            $1500-$2500
          </label>
        </div>
        <div className=" margin-top">
          {" "}
          <label for="price">
            <input
              onChange={(e) => PriceHandler(e)}
              type="radio"
              name="Price"
              value="brands"
              className="pointer"
            />
            $2500-$3500
          </label>
        </div>
        <div className=" margin-top">
          {" "}
          <label for="price">
            <input
              onChange={(e) => PriceHandler(e)}
              type="radio"
              name="Price"
              value="brands"
              className="pointer"
            />
            $3500-$5000
          </label>
        </div>
        <div className=" margin-top">
          {" "}
          <label for="price">
            <input
              onChange={(e) => PriceHandler(e)}
              type="radio"
              name="Price"
              value="brands"
              className="pointer"
            />
            $5000-$7000
          </label>
        </div>
      </form>
    </div>
  );
};
export { PriceModal };
