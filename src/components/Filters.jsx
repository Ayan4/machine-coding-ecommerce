import React from "react";
import { useFilter } from "../context/Filter-context";

function Filters() {
  const { filterDispatch, filterState } = useFilter();

  return (
    <div className="border border-blue-700 px-8 w-1/6">
      <div className="mt-4">
        <p className="text-left">Size</p>
        <ul className="flex mt-4">
          <button
            onClick={() => filterDispatch({ type: "SMALL" })}
            className={`w-10 h-10 mr-2 rounded-full border ${filterState.small &&
              "bg-gray-200 border-blue-700"}`}
          >
            S
          </button>
          <button
            onClick={() => filterDispatch({ type: "MEDIUM" })}
            className={`w-10 h-10 mr-2 rounded-full border ${filterState.medium &&
              "bg-gray-200 border-blue-700"}`}
          >
            M
          </button>
          <button
            onClick={() => filterDispatch({ type: "LARGE" })}
            className={`w-10 h-10 mr-2 rounded-full border ${filterState.large &&
              "bg-gray-200 border-blue-700"}`}
          >
            L
          </button>
          <button
            onClick={() => filterDispatch({ type: "XL" })}
            className={`w-10 h-10 mr-2 rounded-full border ${filterState.xl &&
              "bg-gray-200 border-blue-700"}`}
          >
            XL
          </button>
        </ul>
        <button
          onClick={() => filterDispatch({ type: "CLEAR_SIZE" })}
          className="mt-4 border py-1 px-1.5 rounded bg-gray-200"
        >
          Clear Size Filters
        </button>
      </div>

      <div className="mt-4 pt-2 border-t">
        <p className="text-left">Show Products For</p>
        <ul className="flex mt-2">
          <button
            onClick={() => filterDispatch({ type: "MEN" })}
            className={`border py-1.5 px-2 mr-2 ${filterState.men &&
              "bg-gray-200 border-blue-700"}`}
          >
            Men
          </button>
          <button
            onClick={() => filterDispatch({ type: "WOMEN" })}
            className={`border py-1.5 px-2 mr-2 ${filterState.women &&
              "bg-gray-200 border-blue-700"}`}
          >
            Women
          </button>
        </ul>
        <button
          onClick={() => filterDispatch({ type: "CLEAR_GENDER" })}
          className="mt-4 border py-1 px-1.5 rounded bg-gray-200"
        >
          Clear Gender Filters
        </button>
      </div>

      <div>{/* <input value={} type="checkbox" /> */}</div>
    </div>
  );
}

export default Filters;