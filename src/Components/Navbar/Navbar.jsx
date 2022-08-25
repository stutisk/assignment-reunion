import styles from "../Navbar/Navbar.module.css";
const Navbar = () => {
  return (
    <div className={`flex flex-space-between ${styles.navbar}`}>
      <div className=" ">
        <ul className={`${styles.list} flex gap`}>
          <li className={` pointer heading1 font-bolder`}>Estatery</li>
          <li className={`${styles.listItem} pointer padding0 `}>Rent</li>
          <li className={`${styles.listItem} pointer padding0  `}>Buy</li>
          <li className={`${styles.listItem} pointer padding0  `}>Sell</li>
          <li className={`${styles.listItem} pointer padding0 `}>Manage Property</li>
          <li className={`${styles.listItem} pointer padding0 `}>Resources</li>
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
