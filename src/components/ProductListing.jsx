import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fakeFetch } from "../Api/FakeFetch";
import { CgSpinner } from "react-icons/cg";
import { useFilter } from "../context/Filter-context";

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { filterState } = useFilter();

  // console.log(filterState);

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
    const sortArr = [...productArr];

    if (filterState.sortBy === "highToLow") {
      return sortArr.sort((a, b) => b.price - a.price);
    }

    if (filterState.sortBy === "lowToHigh") {
      return sortArr.sort((a, b) => a.price - b.price);
    }

    return productArr;
  };

  const getFilteredSize = productArr => {
    const sizes = filterState.filter.size;
    let filteredArr = [...productArr];

    if (sizes.length > 0) {
      return filteredArr.filter(item => sizes.includes(item.size));
    }
    return productArr;
  };

  const getFilteredIdealFor = productArr => {
    const genderArr = filterState.filter.sex;
    let filteredArr = [...productArr];

    if (genderArr.length > 0) {
      return filteredArr.filter(item => genderArr.includes(item.sex));
    }
    return productArr;
  };

  const getFilteredBrand = productArr => {
    const brandArr = filterState.filter.brand;
    let filteredArr = [...productArr];

    if (brandArr.length > 0) {
      return filteredArr.filter(item => brandArr.includes(item.brand));
    }
    return productArr;
  };

  // const metaFilteredProducts = productArr => {
  //   let filteredProducts = [...productArr];
  //   const filterObj = filterState.filter;

  //   for (let filterType in filterObj) {
  //     if (filterObj[filterType].length > 0) {
  //       return filteredProducts.filter(item => filterObj[filterType].some(selectedFilter => ))
  //     }
  //   }

  //   return productArr;
  // };

  const sortedProducts = getSortedData(products, filterState);
  // metaFilteredProducts(sortedProducts);

  const filteredSizeProducts = getFilteredSize(sortedProducts);
  const filteredIdealForProducts = getFilteredIdealFor(filteredSizeProducts);
  const filteredProducts = getFilteredBrand(filteredIdealForProducts);

  if (loading)
    return (
      <div className="flex justify-center mt-24">
        <CgSpinner className="animate-spin text-4xl" />
      </div>
    );

  return (
    <div className="px-2 sm:px-16 flex flex-wrap justify-center">
      {filteredProducts.map(item => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductListing;
