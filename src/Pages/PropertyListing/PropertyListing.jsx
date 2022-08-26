import { Card } from "../../Components/Card/Card";
import { Filter } from "../../Components/Filter/Filter";
import data from "../../data.json";
const PropertyListing = () => {
  return (
    <div className="pading-l-r ">
      <h1>Search properties for rent</h1>
      <Filter />
      <div className=" flex flex-wrap gap-cards ">
        {data?.map((property) => (
          <Card property={property} key={property.id} />
        ))}
      </div>
    </div>
  );
};
export { PropertyListing };
