import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fakeFetch } from "../Api/FakeFetch";
import { CgSpinner } from "react-icons/cg";
import { useFilter } from "../context/Filter-context";

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { filterState } = useFilter();

  console.log(filterState);

  useEffect(() => {
    setLoading(true);
    try {
      fakeFetch()
        .then(res => {
          setProducts(prev => res);
          setLoading(false);
        })
        .catch(err => console.log(err));
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  const getSortedData = productArr => {
    if (filterState.all) {
      return productArr;
    }
    if (filterState.highToLow) {
      productArr.sort((a, b) => b.price - a.price);
    }

    if (filterState.lowToHigh) {
      productArr.sort((a, b) => a.price - b.price);
    }

    return productArr;
  };

  const getFilteredData = productArr => {
    if (filterState.small) {
      return productArr.filter(item => item.size === "s");
    }

    if (filterState.medium) {
      return productArr.filter(item => item.size === "m");
    }

    if (filterState.large) {
      return productArr.filter(item => item.size === "l");
    }

    if (filterState.xl) {
      return productArr.filter(item => item.size === "xl");
    }

    if (filterState.men) {
      return productArr.filter(item => item.sex === "men");
    }

    if (filterState.women) {
      return productArr.filter(item => item.sex === "women");
    }

    return productArr;
  };

  getSortedData(products, filterState);

  const transformedArr = getFilteredData(products);

  if (loading)
    return (
      <div className="flex justify-center mt-24">
        <CgSpinner className="animate-spin text-4xl" />
      </div>
    );

  return (
    <div className="px-2 sm:px-16 flex flex-wrap justify-center">
      {transformedArr.map(item => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductListing;
