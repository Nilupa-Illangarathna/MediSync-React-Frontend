import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const TermsPage = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "calc(100vh - 256px)", // Adjust for navbar height
            }}
        >
            <Paper
                sx={{
                    width: "90%",
                    padding: "2rem",
                    textAlign: "left",
                    boxShadow: "none", // Remove elevation
                }}
            >
                <Typography variant="h4" gutterBottom sx={{fontSize: "3.0rem"}}>
                    Terms and Conditions
                </Typography>
                <Typography variant="body1" paragraph sx={{fontSize: "1.2rem"}}>
                    Welcome to MediSync, your comprehensive healthcare management platform. By accessing or using our
                    services, you agree to comply with and be bound by the following terms and conditions:
                </Typography>
                <List dense disablePadding>
                    <ListItem>
                        <ListItemText
                            primary="Privacy and Security"
                            secondary="Users' medical data and personal information are securely stored and protected. MediSync adheres to strict privacy policies and complies with healthcare data regulations."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Data Accuracy"
                            secondary="Users are responsible for providing accurate medical information for optimal healthcare management. MediSync ensures data integrity and confidentiality."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Service Availability"
                            secondary="MediSync strives to maintain uninterrupted access to its services, but occasional downtime or maintenance may occur. Users will be notified of any scheduled maintenance."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="User Conduct"
                            secondary="Users agree to use the MediSync platform responsibly and ethically. Any misuse or violation of terms may result in account suspension or termination."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Intellectual Property"
                            secondary="All content, designs, and intellectual property rights associated with MediSync belong to MediSync and its licensors. Unauthorized use or reproduction of any materials is strictly prohibited."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Limitation of Liability"
                            secondary="MediSync shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use or inability to use the platform, even if MediSync has been advised of the possibility of such damages."
                        />
                    </ListItem>
                </List>
            </Paper>
        </Box>
    );
};

export default TermsPage;
