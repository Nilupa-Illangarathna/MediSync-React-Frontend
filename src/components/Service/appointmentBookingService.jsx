import {
    Box,
    Button,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import {useEffect, useState} from "react";
import {useTheme} from "@emotion/react";

import {bookAppointment, getAvailableAppointmentsBySpeciality,} from "../../apis/appointmentBookingService";

const specialties = ["test", "Allergist", "Gastroenterologist", "Hepatologist"];

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
    const [bookedAppointmentId, setBookedAppointmentId] = useState("");

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
            <Typography variant="h5" color="gray" margin="20px">
                Appointment Scheduling
            </Typography>
            <div style={{display: "flex", flexDirection: "column", marginLeft: 20}}>
                <FormControl sx={{m: 1, width: 300}}>
                    <InputLabel id="Speciality-chip-label"> Speciality</InputLabel>
                    <Select
                        labelId="Speciality-chips-label"
                        id="Speciality-chips"
                        value={selectedSpeciality}
                        input={
                            <OutlinedInput id="select-Speciality" label="Speciality-chip"/>
                        }
                        onChange={(e) => setSpecialty(e.target.value)}
                        renderValue={() => (
                            <Box sx={{display: "flex", flexWrap: "wrap", gap: 0.5}}>
                                <Chip key={selectedSpeciality} label={selectedSpeciality}/>
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
            <TableContainer component={Paper} style={{margin: "20px"}}>
                <Table
                    sx={{
                        minWidth: 650,
                        "& thead th": {
                            fontWeight: "bold",
                            backgroundColor: "rgba(25, 118, 210, 0.8)",
                            color: "white",
                        },
                        "& tbody td": {
                            fontWeight: "normal",
                            color: "darkslategray",
                        },
                        "& tbody tr:hover": {
                            backgroundColor: "rgba(25, 118, 210, 0.1)",
                        },
                        "& tbody tr:nth-of-type(odd)": {
                            backgroundColor: "#f9f9f9",
                        },
                        "& button": {
                            fontWeight: "bold",
                            textTransform: "none",
                        },
                    }}
                    aria-label="appointment table"
                >
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
                        {doctorAppointments.map((drAppointment) =>
                            drAppointment.appointments.map((appointment) => (
                                <TableRow key={drAppointment.id}>
                                    <TableCell>{drAppointment.id}</TableCell>
                                    <TableCell>{drAppointment.name}</TableCell>
                                    <TableCell>{drAppointment.email}</TableCell>
                                    <TableCell>{appointment.id}</TableCell>
                                    <TableCell>{appointment.appointment_date}</TableCell>
                                    <TableCell>{appointment.hospital.name}</TableCell>
                                    <TableCell>{appointment.hospital.location}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color={
                                                bookedAppointmentId === appointment.id
                                                    ? "success"
                                                    : "primary"
                                            }
                                            onClick={() =>
                                                bookAppointment(
                                                    "chamali.vishmani@gmail.com",
                                                    5,
                                                    appointment.id,
                                                    setBookedAppointmentId
                                                )
                                            }
                                        >
                                            {bookedAppointmentId === appointment.id
                                                ? "Booked"
                                                : "Book"}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
