import React, {useEffect, useState} from "react";
import {Box, Button, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Typography,} from "@mui/material";
import {useTheme} from "@emotion/react";

import {checkDDI, getDrugsList} from "../../apis/drugInteraction";

function getStyles(name, selectedSymptoms, theme) {
    return {
        fontWeight:
            selectedSymptoms.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function DDIService() {
    const theme = useTheme();
    const [drugA, setDrugA] = useState("");
    const [drugB, setDrugB] = useState("");
    const [interaction, setInteraction] = useState("");
    const [drugA_list, setDrugA_list] = useState([]);
    const [drugB_list, setDrugB_list] = useState([]);

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

    useEffect(() => {
        getDrugsList(setDrugA_list, setDrugB_list);
    }, []);

    const changeSelectedDrugA = (event) => {
        if (interaction !== "") {
            setInteraction("");
        }
        setDrugA(event.target.value);
    };

    const changeSelectedDrugB = (event) => {
        if (interaction !== "") {
            setInteraction("");
        }
        setDrugB(event.target.value);
    };

    return (
        <div>
            <div style={{margin: "20px"}}>
                <Typography variant="h5" color="gray" marginBottom="20px">
                    Check Drug Interaction
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
                            <InputLabel id="drugA-chip-label"> Drug A</InputLabel>
                            <Select
                                labelId="drugA-chips-label"
                                id="drugA-chips"
                                value={drugA}
                                input={<OutlinedInput id="select-drugA" label="drugA-chip"/>}
                                onChange={(event) => changeSelectedDrugA(event)}
                                renderValue={(selected) => (
                                    <Box sx={{display: "flex", flexWrap: "wrap", gap: 0.5}}>
                                        <Chip key={selected} label={selected}/>
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {drugA_list.map((drug) => (
                                    <MenuItem
                                        key={drug}
                                        value={drug}
                                        style={getStyles(drug, drugA, theme)}
                                    >
                                        {drug}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl sx={{m: 1, width: 300}}>
                            <InputLabel id="drugB-chip-label"> Drug B</InputLabel>
                            <Select
                                labelId="drugB-chips-label"
                                id="drugB-chips"
                                value={drugB}
                                input={<OutlinedInput id="select-drugB" label="drugB-chip"/>}
                                onChange={(event) => changeSelectedDrugB(event)}
                                renderValue={(selected) => (
                                    <Box sx={{display: "flex", flexWrap: "wrap", gap: 0.5}}>
                                        <Chip key={selected} label={selected}/>
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {drugB_list.map((drug) => (
                                    <MenuItem
                                        key={drug}
                                        value={drug}
                                        style={getStyles(drug, drugB, theme)}
                                    >
                                        {drug}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
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
                                onClick={() => checkDDI(drugA, drugB, setInteraction)}
                                style={{width: "200px", height: "40px"}}
                                variant="contained"
                                color="info"
                            >
                                check interaction
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
                                    {interaction}
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
