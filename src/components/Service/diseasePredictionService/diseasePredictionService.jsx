import React, {useState} from "react";
import {Box, Button, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Typography,} from "@mui/material";
import {useTheme} from "@emotion/react";

import {diseases, symptom_index} from "./symptomsAndDiseases";
import {
    predictDisease,
    recommendDoctorUsingDisease,
    recommendDoctorUsingSymptoms,
} from "../../../apis/diseasePredictionAPIs";

function getStyles(name, selectedSymptoms, theme) {
    return {
        fontWeight:
            selectedSymptoms.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function DiseasePredictionService() {
    const theme = useTheme();
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [predictedDisease, setPredictedDisease] = useState("");
    const [recommendedDoctorFromSymptoms, setRecommendedDoctorFromSymptoms] =
        useState("");

    const [selectedDisease, setSelectedDisease] = useState([]);
    const [recommendedDoctorFromDisease, setRecommendedDoctorFromDisease] =
        useState("");

    const symptoms = Object.keys(symptom_index);
    symptoms.sort();

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const addToSelectedSymptoms = (event) => {
        if (predictDisease !== "" || recommendedDoctorFromSymptoms !== "") {
            setPredictedDisease("");
            setRecommendedDoctorFromSymptoms("");
        }

        const {
            target: {value},
        } = event;
        setSelectedSymptoms(typeof value === "string" ? value.split(",") : value);
    };

    const changeSelectedDisease = (event) => {
        if (recommendedDoctorFromDisease !== "") {
            setRecommendedDoctorFromDisease("");
        }
        setSelectedDisease(event.target.value);
    };

    return (
        <div>
            <div style={{margin: "20px"}}>
                <Typography variant="h5" color="gray" marginBottom="20px">
                    Predict disease and recommend doctor using symptoms
                </Typography>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "20px",
                    }}
                >
                    <div
                        style={{display: "flex", flexDirection: "column", marginLeft: 20}}
                    >
                        <FormControl sx={{m: 1, width: 300}}>
                            <InputLabel id="symptoms-chip-label"> Symptoms</InputLabel>
                            <Select
                                labelId="symptom-chips-label"
                                id="symptom-chips"
                                multiple
                                value={selectedSymptoms}
                                input={
                                    <OutlinedInput id="select-symptoms" label="symptom-chip"/>
                                }
                                onChange={addToSelectedSymptoms}
                                renderValue={(selected) => (
                                    <Box sx={{display: "flex", flexWrap: "wrap", gap: 0.5}}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value}/>
                                        ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {symptoms.map((symptom) => (
                                    <MenuItem
                                        key={symptom}
                                        value={symptom}
                                        style={getStyles(symptom, selectedSymptoms, theme)}
                                    >
                                        {symptom}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        {/* <Button type="reset">reset symptoms</Button> */}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "20px",
                            gap: "20px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "20px",
                            }}
                        >
                            <Button
                                type="submit"
                                onClick={() =>
                                    predictDisease(selectedSymptoms, setPredictedDisease)
                                }
                                style={{width: "200px", height: "40px"}}
                                variant="contained"
                                color="info"
                            >
                                predict disease
                            </Button>
                            <div style={{flexGrow: 1}}>
                                <Box
                                    sx={{
                                        border: "2px solid grey",
                                        height: "50px",
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "0 10px",
                                        width: "200px",
                                    }}
                                >
                                    {predictedDisease}
                                </Box>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "20px",
                            }}
                        >
                            <Button
                                type="submit"
                                onClick={() =>
                                    recommendDoctorUsingSymptoms(
                                        selectedSymptoms,
                                        setRecommendedDoctorFromSymptoms
                                    )
                                }
                                style={{width: "200px", height: "40px"}}
                                variant="contained"
                                color="info"
                                size="medium"
                            >
                                recommend doctor
                            </Button>
                            <div style={{flexGrow: 1, maxWidth: "80%"}}>
                                <Box
                                    sx={{
                                        border: "2px solid grey",
                                        height: "50px",
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "0 10px",
                                        width: "200px",
                                    }}
                                >
                                    {recommendedDoctorFromSymptoms}
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{margin: "20px", marginTop: "40px"}}>
                <Typography variant="h5" color="gray" marginBottom="10px">
                    Recommend doctor using symptoms
                </Typography>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "start",
                        gap: "20px",
                        margin: "20px",
                    }}
                >
                    <FormControl sx={{m: 1, width: 300}}>
                        <InputLabel id="diseases-chip-label"> Disease</InputLabel>
                        <Select
                            labelId="disease-chips-label"
                            id="disease-chips"
                            value={selectedDisease}
                            input={<OutlinedInput id="select-disease" label="disease-chip"/>}
                            onChange={(event) => changeSelectedDisease(event)}
                            renderValue={(selected) => (
                                <Box sx={{display: "flex", flexWrap: "wrap", gap: 0.5}}>
                                    <Chip key={selected} label={selected}/>
                                </Box>
                            )}
                            MenuProps={MenuProps}
                        >
                            {diseases.map((disease) => (
                                <MenuItem
                                    key={disease}
                                    value={disease}
                                    style={getStyles(disease, selectedDisease, theme)}
                                >
                                    {disease}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "20px",
                            alignSelf: "center",
                            marginLeft: "20px",
                        }}
                    >
                        <Button
                            type="submit"
                            onClick={() =>
                                recommendDoctorUsingDisease(
                                    selectedDisease,
                                    setRecommendedDoctorFromDisease
                                )
                            }
                            style={{width: "200px", height: "40px"}}
                            variant="contained"
                            color="info"
                            size="medium"
                        >
                            recommend doctor
                        </Button>
                        <div style={{flexGrow: 1, maxWidth: "80%"}}>
                            <Box
                                sx={{
                                    border: "2px solid grey",
                                    height: "50px",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "0 10px",
                                    width: "200px",
                                }}
                            >
                                {recommendedDoctorFromDisease}
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
