import React from "react";
import { useFilter } from "../context/Filter-context";

function Filters() {
  const { filterDispatch, filterState } = useFilter();

  const sizes = ["S", "M", "L", "XL"];
  const brands = [
    "Wrogn",
    "Fido Dido",
    "Huetrap",
    "Mayra",
    "Roadster",
    "La Zoire"
  ];

  // console.log(filterState);

  return (
    <div className="border border-blue-700 px-8 w-1/6">
      <div className="mt-4">
        <p className="text-left">Size</p>
        <ul className="flex mt-4">
          {sizes.map(item => {
            return (
              <button
                key={item}
                onClick={() => filterDispatch({ type: "SIZE", payload: item })}
                className={`w-10 h-10 mr-2 rounded-full border ${filterState.filter.size.includes(
                  item
                ) && "bg-gray-200 border-blue-700"}`}
              >
                {item}
              </button>
            );
          })}
        </ul>
      </div>

      <div className="mt-4 pt-2 border-t">
        <p className="text-left">Show Products For</p>
        <ul className="flex mt-2">
          <button
            onClick={() =>
              filterDispatch({ type: "IDEAL_FOR", payload: "men" })
            }
            className={`border py-1.5 px-2 mr-2 ${filterState.filter.sex.includes(
              "men"
            ) && "bg-gray-200 border-blue-700"}`}
          >
            Men
          </button>
          <button
            onClick={() =>
              filterDispatch({ type: "IDEAL_FOR", payload: "women" })
            }
            className={`border py-1.5 px-2 mr-2 ${filterState.filter.sex.includes(
              "women"
            ) && "bg-gray-200 border-blue-700"}`}
          >
            Women
          </button>
        </ul>
      </div>

      <div className="mt-4 border-t pt-2">
        <p className="text-left">Filter Brand</p>
        {brands.map(item => (
          <div key={item} className="text-left mt-4">
            <input
              className="mr-2"
              onClick={() => filterDispatch({ type: "BRAND", payload: item })}
              type="checkbox"
              checked={filterState.filter.brand.includes(item)}
            />
            <label htmlFor="">{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filters;
