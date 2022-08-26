import { useWishlist } from "../../Context/WishlistContext";
import styles from "../Card/Card.module.css";
import { BiBed, BiBath, BiArea, BiHeart } from "../Icons/Icons";
const Card = ({ property }) => {
  const { image, price, location, beds, title } = property;
  const {
    
    dispatch,
  } = useWishlist();
  return (
    <div className={`border-radius1  ${styles.card}  margin-top`}>
      <div>
        {" "}
        <img className={` ${styles.cardimg}  `} src={image}></img>
      </div>

      <div className={` ${styles.cardtext} padding1  `}>
        <div className={` flex flex-space-between  `}>
          <div className={` ${styles.cardprice} font-bolder icon-color `}>
            {price} <span className="text-color ">/month</span>
          </div>

          <div
            className="text-color"
            onClick={() =>
              dispatch({ type: "Add To Saved Homes", payload: property })
            }
          >
            <BiHeart className="icon-color icon-border" size={22} />
          </div>
        </div>

        <div className={` ${styles.cardprice} font-bolder  `}>{title}</div>
        <div className="text-color">{location}</div>
      </div>
      <div className={` ${styles.cardtext} padding1 flex flex-space-between`}>
        <div className={` text-color`}>
          <BiBed className="margin-r  icon-color" size={19} />
          {beds} Beds
        </div>
        <div className="text-color">
          <BiBath className="icon-color margin-r" size={19} />2 Bathrooms
        </div>
        <div className="text-color">
          <BiArea className="icon-color margin-r" size={19} />5{" "}
          <span>&#215;</span>7 m<sup>2</sup>
        </div>
      </div>
    </div>
  );
};

export { Card };
