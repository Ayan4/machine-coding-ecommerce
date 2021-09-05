import { createContext, useContext, useReducer } from "react";
import {
  initialState,
  filterReducer
} from "../context/reducers/filter-reducer";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialState);
  return (
    <FilterContext.Provider value={{ filterDispatch, filterState }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
