import { Card } from "../../Components/Card/Card";
import { Filter } from "../../Components/Filter/Filter";
import { useFilter } from "../../Context/Filter/FilterContext";
import { getFiltereddata } from "../../utils/getFiltereddata";
import { useState } from "react";
import styles from "../PropertyListing/PropertyListing.module.css";
import { SearchList } from "../../Components/SearchList/SearchList";
import { useEffect } from "react";

import data from "../../data.json";
const PropertyListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [property] = useState(data);
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    setSearchTerm("");
  }, []);

  const filteredProperty = property.filter((property) => {
    if (searchTerm) {
      return property.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return property.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const { state } = useFilter();
  const FinalProductList = getFiltereddata(state, property);
  return (
    <div className="pading-l-r ">
      <div className="flex flex-space-between">
        <h1>Search properties for rent</h1>
        <div>
          <input
            type="text"
            placeholder="Search With SearchBar..."
            name="search"
            className={` ${styles.searchbar}`}
            value={searchTerm}
            onChange={handleSearchTerm}
          />

          {searchTerm && (
            <SearchList
              filteredProperty={filteredProperty}
              setSearchTerm={setSearchTerm}
            />
          )}
        </div>
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
