import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {items} from "../../values/items";
import {Typography} from "@mui/material";

import DiseasePredictionService from "./diseasePredictionService/diseasePredictionService";
import AppointmentBookingService from "./appointmentBookingService";
import DDIService from "./ddi_service";

const ServicePage = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const id = parseInt(productId, 10);
        const foundProduct = items.find((item) => item.id === id);
        setProduct(foundProduct);
    }, [productId]);

    switch (productId) {
        case "1":
            return <DiseasePredictionService/>;
        case "2":
            return <AppointmentBookingService/>;
        case "3":
            return <DDIService/>;
        case "4":
            return <DDIService/>;
        default:
            return <Typography>No Service Found</Typography>;
    }
};

export default ServicePage;
