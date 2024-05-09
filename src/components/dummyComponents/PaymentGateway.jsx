import React from "react";
import { Typography, TextField, Button, Box } from "@mui/material";

const PaymentGateway = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(80vh - 64px)",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Payment Gateway
      </Typography>
      <Box sx={{ width: 400 }}>
        <TextField
          id="cardNumber"
          label="Card Number"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="expiryDate"
          label="Expiry Date"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="cvv"
          label="CVV"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="cardHolderName"
          label="Cardholder Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" fullWidth>
          Pay Now
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentGateway;
