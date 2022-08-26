import { Card } from "../../Components/Card/Card";
import { Filter } from "../../Components/Filter/Filter";
import { useFilter } from "../../Context/Filter/FilterContext";
import { getFiltereddata } from "../../utils/getFiltereddata";
import { useState } from "react";
import styles from "../PropertyListing/PropertyListing.module.css"

import data from "../../data.json";
const PropertyListing = () => {
  const [property, setPoperty] = useState(data);
  const { state } = useFilter();
  const FinalProductList = getFiltereddata(state, property);
  return (
    <div className="pading-l-r ">
      <div className="flex flex-space-between">
        <h1>Search properties for rent</h1>
       <div ><input type="text" placeholder="Search With SearchBar..." name="search" className={` ${styles.searchbar}`} /></div> 
      </div>

      <Filter />
      <div className=" flex flex-wrap gap-cards ">
        {FinalProductList?.map((property) => (
          <Card property={property} key={property.id} />
        ))}
      </div>
    </div>
  );
};
export { PropertyListing };
