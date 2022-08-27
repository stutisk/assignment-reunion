import { useFilter } from "../../Context/Filter/FilterContext";
import styles from "../PriceModal/PriceModal.module.css";
const PriceModal = () => {
  const { dispatch } = useFilter();

  const PriceHandler = (e) => {
    if (e.target.checked) {
      dispatch({ type: e.target.name, payload: e.target.value });
    } 
  };

  return (
    <div className={`${styles.priceModal} border-radius1 btn-padding  `}>
      <form className="pricelist">
     
        <div className=" margin-top">
          {" "}
          <label for="price">
            <input
              onChange={(e) => PriceHandler(e)}
              type="radio"
              name="PRICE"
              value={10000}
              className="pointer"
            />
            $10,000+
          </label>
        </div>
        <div className=" margin-top">
          {" "}
          <label for="price">
            <input
              onChange={(e) => PriceHandler(e)}
              type="radio"
              name="PRICE"
              value={20000}
              className="pointer"
            />
            $20,000+
          </label>
        </div>
        <div className=" margin-top">
          {" "}
          <label for="price">
            <input
               onChange={(e) => PriceHandler(e)}
              type="radio"
              name="PRICE"
              value={30000}
              className="pointer"
            />
            $30,000+
          </label>
        </div>
        <div className=" margin-top">
          {" "}
          <label for="price">
            <input
              onChange={(e) => PriceHandler(e)}
              type="radio"
              name="PRICE"
              value={40000}
              className="pointer"
            />
            $40,000+
          </label>
        </div>
        <div className=" margin-top">
          {" "}
          <label for="price">
            <input
             onChange={(e) => PriceHandler(e)}
              type="radio"
              name="PRICE"
              value={50000}
              className="pointer"
            />
            $50,000+
          </label>
        </div>
       
      </form>
    </div>
  );
};
export { PriceModal };
