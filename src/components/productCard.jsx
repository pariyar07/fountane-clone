import React from "react";

const ProductCard = ({ product: { title, description, image } }) => {
  return <div>{console.log(title)}</div>;
};

export default ProductCard;
