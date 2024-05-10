// ItemCard.js
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ItemCard({ image, name, description, inStock, id }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={() => {
          // Navigation logic goes here
          Example: navigate(`/product/${id}`)
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}