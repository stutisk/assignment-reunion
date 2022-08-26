import styles from "../Navbar/Navbar.module.css";
import { BiHeart } from "react-icons/bi";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const activeStyle = {
    backgroundColor: "#e9e4f7",
    color: "#9369f7",
    fontWeight: "bolder",
  };
  return (
    <div className={`flex flex-space-between ${styles.navbar}`}>
      <div className=" ">
        <ul className={`${styles.list} flex gap`}>
          <NavLink className={`${styles.navlink} `} to="/">
            <li className={` pointer heading1 font-bolder ${styles.navlink}  `}>
              <img src="https://res.cloudinary.com/dvbw8xujd/image/upload/c_scale,h_49/v1661512132/ostowd6uq047b83hr5uh.png" className={`${styles.navimage} `}></img>
              Estatery
            </li>
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`${styles.navlist} `}
            to="rent"
          >
            {" "}
            <li className={`${styles.listItem} pointer padding0 `}>Rent</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`${styles.navlist} `}
            to="Buy"
          >
            {" "}
            <li className={`${styles.listItem} pointer padding0 `}>Buy</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`${styles.navlist} `}
            to="Sell"
          >
            {" "}
            <li className={`${styles.listItem} pointer padding0 `}>Sell</li>
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`${styles.navlist} `}
            to="resources"
          >
            {" "}
            <li className={`${styles.listItem} pointer padding0 `}>
              Resources
            </li>
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`${styles.navlist} `}
            to="favorities"
          >
            {" "}
            <li className={`${styles.listItem} pointer padding0 `}>
              Favourites{" "}
             
            </li>
          </NavLink>
        </ul>
      </div>
      <div>
        <ul className={`${styles.list} flex gap  `}>
          <li>
            <button
              className={`btn-padding pointer border-radius1 btn-secondry font-bolder `}
            >
              Login
            </button>
          </li>
          <li>
            <button
              className={`btn-padding pointer border-radius1 btn-primary font-bolder`}
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Navbar };
