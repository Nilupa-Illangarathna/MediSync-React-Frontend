import {Box, Stack, Typography} from "@mui/material";
import React from "react";
import heroImage from "../../assets/heroImage.jpg";

const HeroSection = () => {
    return (
        <Box
            sx={{
                width: "auto", // Adjust the width as needed
                height: 600, // Adjust the height as needed
                backgroundImage: `url(${heroImage})`, // Replace with your image URL
                backgroundSize: "cover", // Cover the entire Box area
                backgroundPosition: "center", // Center the background image
                display: "flex", // Use flex to easily position children
                justifyContent: "center", // Center children horizontally
                alignItems: "center", // Center children vertically
                color: "white", // Adjust text color as needed
                position: "relative", // Set position to relative to contain the overlay and text
            }}
        >
            {/* Dark-colored overlay */}
            <Box
                sx={{
                    position: "absolute", // Position the overlay absolutely
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark color with 0.5 opacity
                }}
            />
            {/* Text content */}
            <Stack
                direction={"column"}
                justifyContent="center"
                alignItems="center"
                position="relative" // Set position to relative to contain z-index
                zIndex={1} // Ensure the text is on top of the overlay
            >
                <Typography variant="h3" sx={{color: "rgba(255, 255, 255, 0.9)"}}>
                    Revolutionize Healthcare Access with MediSync
                </Typography>
                <Typography variant="h5" sx={{color: "rgba(255, 255, 255, 0.8)"}}>
                    Connect patients with doctors remotely, ensuring seamless communication and medical record
                    management.
                </Typography>
            </Stack>
        </Box>
    );
};

export default HeroSection;
