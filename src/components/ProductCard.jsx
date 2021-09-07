import React from "react";

function ProductCard(productItem) {
  const product = productItem.product;
  return (
    <div className="w-36 sm:w-72 text-left m-4">
      <img className="w-full" src={product.pic} alt="" />
      <p className="text-gray-600 font-semibold">{product.brand}</p>
      <p className="text-gray-900">{product.name}</p>
      <div className="flex justify-between border-t mt-1 pt-1">
        <p className="text-gray-900 font-semibold">Rs.{product.price}</p>
        <p>size: {product.size}</p>
      </div>
    </div>
  );
}

export default ProductCard;
