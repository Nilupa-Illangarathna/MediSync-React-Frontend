import React, { useState } from "react";
import {
  Box,
  Chip,
  MenuItem,
  OutlinedInput,
  Select,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { useTheme } from "@emotion/react";

import { symptom_index } from "./symptoms";
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
    const {
      target: { value },
    } = event;
    setSelectedSymptoms(typeof value === "string" ? value.split(",") : value);
  };

  const predictDisease = async () => {
    const response = await fetch(
      "http://127.0.0.1:8000/predictDiseaseFromSymptoms",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symptoms: selectedSymptoms.join(",") }),
      }
    );

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const prediction = await response.json();
    setPredictedDisease(prediction.predicted_disease);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="symptoms-chip-label"> Symptoms</InputLabel>
        <Select
          labelId="symptom-chips-label"
          id="symptom-chips"
          multiple
          value={selectedSymptoms}
          input={<OutlinedInput id="select-symptoms" label="symptom-chip" />}
          onChange={addToSelectedSymptoms}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
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
        <Button type="reset">reset</Button>
        <Button type="submit" onClick={predictDisease}>
          predict disease
        </Button>
      </FormControl>
      <div>
        <Box>{predictedDisease}</Box>
      </div>
    </div>
  );
}
