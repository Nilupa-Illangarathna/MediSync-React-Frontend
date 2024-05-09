import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../../values/items";
import { Typography } from "@mui/material";

const ServicePage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const id = parseInt(productId, 10);
    const foundProduct = items.find((item) => item.id === id);
    setProduct(foundProduct);
  }, [productId]);

  if (product == null) return <Typography>No Product Found</Typography>;

  return (
    <>
      <Typography variant="h3">Welcome to {product.name}</Typography>
      <img src={product.image} alt={product.name} />
    </>
  );
};

export default ServicePage;
