import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../../values/items";
import { Typography } from "@mui/material";

import DiseasePredictionService from "./diseasePredictionService/diseasePredictionService";

const ServicePage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const id = parseInt(productId, 10);
    const foundProduct = items.find((item) => item.id === id);
    setProduct(foundProduct);
  }, [productId]);

  switch (productId) {
    case "1":
      return <DiseasePredictionService />;
    default:
      return <Typography>No Service Found</Typography>;
  }
};

export default ServicePage;
