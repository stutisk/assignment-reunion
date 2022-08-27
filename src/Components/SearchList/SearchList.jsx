import { Link } from "react-router-dom";
import styles from "../SearchList/SearchList.module.css";
export const SearchList = ({ filteredProducts, setSearchTerm }) => {
  const handleClick = () => {
    setSearchTerm("");
  };

  return (
    <div className={` ${styles.searchList}   `} onClick={handleClick}>
      {filteredProducts.length == 0 ? (
        <small>No products available</small>
      ) : (
        filteredProducts?.map(({ image, title }) => {
          return (
            <div>
              <div  className={` ${styles.searchBox} flex `}>
                {" "}
                <img
                  className={` ${styles.searchimg}  `}
                  src={image}
                  alt="house"
                ></img>
                <div className={`  font-bolder  `}>{title}</div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
