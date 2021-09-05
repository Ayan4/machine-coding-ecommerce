import products from "../products.json";
console.log(products);

export const fakeFetch = () => {
  return new Promise((resolve, reject) => {
    if (products) {
      setTimeout(() => {
        resolve(products.products);
      }, 1000);
    } else {
      reject("Could not fetch products at this moment!");
    }
  });
};
