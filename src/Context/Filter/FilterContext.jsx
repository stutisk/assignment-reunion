import { createContext, useContext } from "react";
import { useReducer } from "react";
import { FilterReducer } from "./FilterReducer";
import data from "../../data.json";
const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);
const InitialState = {
  property: data,
  price: "all",
  house:[],
  date:"all"
};
const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReducer, InitialState);
  return (
    <FilterContext.Provider value={{ state, dispatch, InitialState }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
