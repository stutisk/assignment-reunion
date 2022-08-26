import { Card } from "../../Components/Card/Card";
import { Filter } from "../../Components/Filter/Filter";
import { useFilter } from "../../Context/Filter/FilterContext";
import { getFiltereddata } from "../../utils/getFiltereddata";
import { useState } from "react";

import data from "../../data.json";
const PropertyListing = () => {
  const [property, setPoperty] = useState(data);
  const { state } = useFilter();
  const FinalProductList = getFiltereddata(state, property);
  return (
    <div className="pading-l-r ">
      <h1>Search properties for rent</h1>
      <Filter />
      <div className=" flex flex-wrap gap-cards ">
        { FinalProductList?.map((property) => (
          <Card property={property} key={property.id} />
        ))}
      </div>
    </div>
  );
};
export { PropertyListing };
