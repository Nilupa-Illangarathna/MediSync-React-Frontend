import React, {useState} from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SignUpForm from "./SignUpForm";

function SignUp() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                width: "50%", // Set width to 80%
                bgcolor: "background.paper",
                display: "flex",
                flexDirection: "column", // Change flex direction to column
                margin: "auto", // Center horizontally
            }}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Role Tabs"
                sx={{borderBottom: 1, borderColor: "divider"}}
            >
                <Tab label="Patient"/>
                <Tab label="Doctor"/>
                <Tab label="Admin"/>
            </Tabs>
            <Box sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "16px",
            }}>
                {/* Pass the role value to SignUpForm */}
                <SignUpForm role={value === 0 ? "patient" : value === 1 ? "doctor" : "admin"}/>
            </Box>
        </Box>
    );
}

export default SignUp;
