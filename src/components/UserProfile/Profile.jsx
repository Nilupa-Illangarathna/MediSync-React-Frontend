// import React, { useEffect } from "react";
// import {
//   Container,
//   Card,
//   Grid,
//   Typography,
//   Avatar,
//   Box,
//   dividerClasses,
// } from "@mui/material";
// import { deepOrange, deepPurple } from "@mui/material/colors";

// const Profile = () => {
//   const [userData, setUserData] = useState(() => {
//     const storedData = localStorage.getItem("formData");
//     return storedData ? JSON.parse(storedData) : {};
//   });

//   useEffect(() => {
//     // Retrieve form data from local storage
//     const storedData = localStorage.getItem("formData");
//     if (storedData) {
//       // Parse the JSON string back into a JavaScript object
//       const parsedData = JSON.parse(storedData);
//       // Set the state with the retrieved data
//       setUserData(parsedData);
//     }
//   }, []);

//   return (
//     <>
//       <Box display="flex" justifyContent="center" marginTop={2}>
//         <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
//       </Box>

//       <br />

//       <Container>
//         <Grid container spacing={4} justifyContent="center">
//           {/* First Column */}
//           <Grid item xs={12} md={4} marginTop={2}>
//             <Card>
//               <Typography marginLeft={2}>
//                 Frist Name:
//                 <b>{userData.firstName}</b>
//               </Typography>
//             </Card>
//             <br />
//             <Card>
//               <Typography marginLeft={2}>
//                 Email:
//                 <b>{userData.email}</b>
//               </Typography>
//             </Card>
//             <br />
//             <Card>
//               <Typography marginLeft={2}>
//                 Height:
//                 <b>{userData.height}</b>
//               </Typography>
//             </Card>
//             <br />
//             <Card>
//               <Typography marginLeft={2}>
//                 Shoe Size:
//                 <b>{userData.shoeSizeUS}</b>
//               </Typography>
//             </Card>
//             <br />
//             <Card>
//               <Typography marginLeft={2}>
//                 Hip Circumstance:
//                 <b>{userData.hipCircum}</b>
//               </Typography>
//             </Card>
//             <br />
//             {gender === male ? (
//               <div></div>
//             ) : (
//               <Card>
//                 <Typography marginLeft={2}>
//                   Bra Cup Size:
//                   <b>{userData.braCupSize}</b>
//                 </Typography>
//               </Card>
//             )}
//           </Grid>

//           {/* Second Column */}
//           <Grid item xs={12} md={4} marginTop={2}>
//             <Card>
//               <Typography marginLeft={2}>
//                 Last Name:
//                 <b>{userData.lastName}</b>
//               </Typography>
//             </Card>
//             <br />
//             <Card>
//               <Typography marginLeft={2}>
//                 Gender:
//                 <b>{userData.gender}</b>
//               </Typography>
//             </Card>
//             <br />
//             <Card>
//               <Typography marginLeft={2}>
//                 Weight:
//                 <b>{userData.weight}</b>
//               </Typography>
//             </Card>
//             <br />
//             <Card>
//               <Typography marginLeft={2}>
//                 Age:
//                 <b>{userData.age}</b>
//               </Typography>
//             </Card>
//             <br />
//             <Card>
//               <Typography marginLeft={2}>
//                 Shoulder Length:
//                 <b>{userData.shoulderLen}</b>
//               </Typography>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// };

// export default Profile;

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import bcrypt from "bcryptjs";
import {Person} from "@mui/icons-material";

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

function Profile() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        height: "",
        weight: "",
        gender: "male",
        braCupSize: "",
        age: "",
        shoeSizeUS: "",
        hipCircum: "",
        shoulderLen: "",
        allowExtraEmails: false,
    });

//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Retrieve form data from local storage
//     const storedData = localStorage.getItem("formData");
//     if (storedData) {
//       // Parse the JSON string back into a JavaScript object
//       const parsedData = JSON.parse(storedData);
//       // Set the state with the retrieved data
//       setUserData(parsedData);
//     }
//   }, [userData]);

    React.useEffect(() => {
        // Retrieve form data from local storage
        const storedData = localStorage.getItem("formData");
        if (storedData) {
            // Parse the JSON string back into a JavaScript object
            const parsedData = JSON.parse(storedData);
            // Set the state with the retrieved data
            setFormData(parsedData);
        }
    }, []);

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
        const hashedPassword = hashPassword(formData.password);
        const dataToLog = {...formData, password: hashedPassword};
        console.log(dataToLog);
        localStorage.setItem("formData", JSON.stringify(formData));
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 2,
                    marginBottom: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{m: 1, bgcolor: "primary.main"}}>
                    <Person/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    User Profile
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="height"
                                required
                                fullWidth
                                id="height"
                                label="Height (cm)"
                                value={formData.height}
                                onChange={handleChange}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="weight"
                                required
                                fullWidth
                                id="weight"
                                label="Weight (kg)"
                                value={formData.weight}
                                onChange={handleChange}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup
                                    row
                                    aria-label="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel
                                        value="male"
                                        control={<Radio/>}
                                        label="Male"
                                    />
                                    <FormControlLabel
                                        value="female"
                                        control={<Radio/>}
                                        label="Female"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        {formData.gender === "female" && (
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="braCupSize"
                                    required
                                    fullWidth
                                    id="bra_cup_size"
                                    label="Bra Cup Size"
                                    value={formData.braCupSize}
                                    onChange={handleChange}
                                    autoFocus
                                />
                            </Grid>
                        )}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="age"
                                required
                                fullWidth
                                id="age"
                                label="Age"
                                value={formData.age}
                                onChange={handleChange}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="shoeSizeUS"
                                required
                                fullWidth
                                id="shoe_size_us"
                                label="Shoe Size (in US)"
                                value={formData.shoeSizeUS}
                                onChange={handleChange}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="hipCircum"
                                required
                                fullWidth
                                id="hip_circum"
                                label="Hip Circum (cm)"
                                value={formData.hipCircum}
                                onChange={handleChange}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="shoulderLen"
                                required
                                fullWidth
                                id="shoulder_len"
                                label="Shoulder Length (cm)"
                                value={formData.shoulderLen}
                                onChange={handleChange}
                                autoFocus
                            />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Save Profile
                    </Button>

                </Box>
            </Box>
        </Container>
    );
}

export default Profile;
