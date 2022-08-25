import styles from "../Filter/Filter.module.css"
const Filter = () => {
  return (
    <div className={`flex   btn-padding ${styles.filterSection} border-radius1 flex-space-between `}>
      <div  className={` padding1 ${styles.filters} `}>
        <div className="text-color font-bolder">Location</div>
        <div className=" font-bolder">New York,USA</div>
      </div>
     
      <div  className={` padding1 ${styles.filters} `}>
        <div className="text-color font-bolder">When</div>
        <div  className=" font-bolder">Select Move-in Date</div>
      </div>
      <div  className={` padding1 ${styles.filters} `}>
        <div className="text-color font-bolder">Price</div>
        <div  className=" font-bolder">$500-$200</div>
      </div>
      <div  className={` padding1 ${styles.filters} `}>
        <div className="text-color font-bolder">Property Type</div>
        <div  className=" font-bolder">Houses</div>
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
