import styles from "../Filter/Filter.module.css";
import { MdKeyboardArrowDown } from "../Icons/Icons";
const Filter = () => {
  return (
    <div
      className={`flex   btn-padding ${styles.filterSection} border-radius1 flex-space-between `}
    >
      <div className={` padding1 ${styles.filters} `}>
        <div className="text-color font-bolder">Location</div>
        <div>
          <div className=" font-bolder">New York,USA</div>
        </div>
      </div>

      <div className={` padding1 ${styles.filters} `}>
        <div className="text-color font-bolder">When</div>
        <div className="flex flex-space-between " >
          {" "}
          <div className=" font-bolder">Select Move-in Date</div>
        
        </div>
      </div>
   

      <div className={` padding1 ${styles.filters} `}>
        <div className="text-color font-bolder">Price</div>
        <div className="flex gap1" >
          {" "}
          <div className=" font-bolder">$500-$200</div>
         <MdKeyboardArrowDown size={22} className="pointer icon-color icon-border"/>
        </div>
      </div>

      <div className={` padding1 ${styles.filters} `}>
        <div className="text-color font-bolder">Property Type</div>
        <div className="flex gap1" >
          {" "}
          <div className=" font-bolder">Houses</div>
         <MdKeyboardArrowDown size={22} className="pointer icon-color icon-border"/>
        </div>
      </div>

     
      <div className="btn-padding">
        <button
          className={`btn-padding pointer border-radius1 btn-primary font-bolder`}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export { Filter };
