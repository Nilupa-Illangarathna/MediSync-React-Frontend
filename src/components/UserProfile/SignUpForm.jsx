import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Checkbox, FormControlLabel, Grid} from "@mui/material";

function SignUpForm({role}) {
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        contactNumber: "",
        email: "",
        password: "",
        age: "",
        locationAddress: "",
        nic: "",
        hospital: "",
        specialty: "",
        hospitalLocation: "",
        requestId: "",
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (event) => {
        const {name, checked} = event.target;
        setFormData({
            ...formData,
            [name]: checked,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data:", formData);
        // Add logic to submit form data
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                {/* All common fields */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="fullName"
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </Grid>
                {/* More fields based on the role */}
                {role === "patient" && (
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="locationAddress"
                            label="Location Address"
                            name="locationAddress"
                            value={formData.locationAddress}
                            onChange={handleChange}
                        />
                    </Grid>
                )}
                {role === "doctor" && (
                    <React.Fragment>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="nic"
                                label="NIC"
                                name="nic"
                                value={formData.nic}
                                onChange={handleChange}
                            />
                        </Grid>
                        {/* Add other doctor-specific fields here */}
                    </React.Fragment>
                )}
                {role === "admin" && (
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="requestId"
                            label="Request ID"
                            name="requestId"
                            value={formData.requestId}
                            onChange={handleChange}
                        />
                    </Grid>
                )}
                {/* Common fields */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="contactNumber"
                        label="Contact Number"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="age"
                        label="Age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
                                name="allowExtraEmails"
                                checked={formData.allowExtraEmails}
                                onChange={handleCheckboxChange}
                            />
                        }
                        label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Sign Up
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default SignUpForm;
