import { Link, useNavigate } from "react-router-dom";
import styles from "../SearchList/SearchList.module.css";
export const SearchList = ({ filteredProperty , setSearchTerm }) => {
    const navigate=useNavigate();
      const handleClick = () => {
    setSearchTerm("");
  };

  return (
    <div className={` ${styles.searchList}  pointer `} onClick={handleClick}>
      {filteredProperty .length == 0 ? (
        <small>No properties available</small>
      ) : (
        filteredProperty ?.map(({ image, title,id }) => {
          return (
            <div>
              <div  className={` ${styles.searchBox} flex margin-top `}>
                {" "}
                <img
                onClick={() => navigate(`/property/${title}`)}
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
