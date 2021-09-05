import React from "react";
import { useFilter } from "../context/Filter-context";

function Sort() {
  const { filterDispatch, filterState } = useFilter();

  console.log(filterState);

  return (
    <div className="flex my-4 px-8 sm:px-28">
      <p className="text-lg mr-5 border px-1.5">Sort By:</p>
      <div>
        <button
          onClick={() => filterDispatch({ type: "ALL_PRICE" })}
          className={`mr-4 border-b-2 border-blue-700 py-1 px-2 ${filterState.all &&
            "bg-gray-200"} transition-all hover:bg-gray-100`}
        >
          All
        </button>
        <button
          onClick={() => filterDispatch({ type: "LOW_TO_HIGH" })}
          className={`mr-4 border-b-2 border-blue-700 py-1 px-2 transition-all hover:bg-gray-100 ${filterState.lowToHigh &&
            "bg-gray-200"}`}
        >
          Price-Low to High
        </button>
        <button
          onClick={() => filterDispatch({ type: "HIGH_TO_LOW" })}
          className={`mr-4 border-b-2 border-blue-700 py-1 px-2 transition-all hover:bg-gray-100 ${filterState.highToLow &&
            "bg-gray-200"}`}
        >
          Price-High to Low
        </button>
      </div>
    </div>
  );
}

export default Sort;
