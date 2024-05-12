import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Box,
  Chip,
  Checkbox,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";

import { getAvailableAppointmentsBySpeciality } from "../../apis/appointmentBookingService";
const specialties = [
  "test",
  "Cardiologist",
  "Dermatologist",
  "Endocrinologist",
  "Gastroenterologist",
  "Gynecologist",
  "Hematologist",
  "Infectious Disease Specialist",
  "Nephrologist",
  "Neurologist",
  "Oncologist",
  "Ophthalmologist",
  "Otolaryngologist",
  "Pediatrician",
  "Physiatrist",
  "Psychiatrist",
  "Pulmonologist",
  "Radiologist",
  "Rheumatologist",
  "Urologist",
];

function getStyles(speciality, selectedSpeciality, theme) {
  return {
    fontWeight:
      selectedSpeciality.indexOf(speciality) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function AppointmentBookingService() {
  const theme = useTheme();
  const [doctorAppointments, setDrAppointments] = useState([]);
  const [selectedSpeciality, setSpecialty] = useState("");

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
    getAvailableAppointmentsBySpeciality(selectedSpeciality, setDrAppointments);
  }, [selectedSpeciality]);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Appointment scheduling
      </Typography>
      <div style={{ display: "flex", flexDirection: "column", marginLeft: 20 }}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="Speciality-chip-label"> Speciality</InputLabel>
          <Select
            labelId="Speciality-chips-label"
            id="Speciality-chips"
            value={selectedSpeciality}
            input={
              <OutlinedInput id="select-Speciality" label="Speciality-chip" />
            }
            onChange={(e) => setSpecialty(e.target.value)}
            renderValue={() => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                <Chip key={selectedSpeciality} label={selectedSpeciality} />
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {specialties.map((speciality) => (
              <MenuItem
                key={speciality}
                value={speciality}
                style={getStyles(speciality, selectedSpeciality, theme)}
              >
                {speciality}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="appointment table">
          <TableHead>
            <TableRow>
              <TableCell>Doctor Id</TableCell>
              <TableCell>Doctor name</TableCell>
              <TableCell>Doctor Email</TableCell>
              <TableCell>Appointment Id</TableCell>
              <TableCell>Appointment Time</TableCell>
              <TableCell>Hospital Name</TableCell>
              <TableCell>Hospital Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctorAppointments.map((drAppointment) => (
              <TableRow key={drAppointment.id}>
                <TableCell>{drAppointment.id}</TableCell>
                <TableCell>{drAppointment.name}</TableCell>
                <TableCell>{drAppointment.email}</TableCell>
                {drAppointment.appointments.map((appointment) => (
                  // <TableRow key={appointment.id}>
                  <>
                    <TableCell>{appointment.id}</TableCell>
                    <TableCell>{appointment.appointment_date}</TableCell>
                    <TableCell>{appointment.hospital.name}</TableCell>
                    <TableCell>{appointment.hospital.location}</TableCell>
                  </>
                ))}
                <TableCell>
                  <Button>test</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
