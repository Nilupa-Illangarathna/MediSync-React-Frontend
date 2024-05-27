import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Typography } from '@mui/material';
import axios from 'axios';

const MedicationTable = ({ fetchMedications, medications }) => {

    useEffect(() => {
        fetchMedications();
    }, [fetchMedications]);

    return (
        <Container>
            <Typography variant="h6" gutterBottom>
                Medication Log
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>User ID</TableCell>
                            <TableCell>Medication Name</TableCell>
                            <TableCell>Dosage</TableCell>
                            <TableCell>Measurement</TableCell>
                            <TableCell>Frequency Hours</TableCell>
                            <TableCell>Time of Intake</TableCell>
                            <TableCell>Start Date</TableCell>
                            <TableCell>End Date</TableCell>
                            <TableCell>Created At</TableCell>
                            <TableCell>Treatment Adherence</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {medications.map((medication) => (
                            <TableRow key={medication.id}>
                                <TableCell>{medication.id}</TableCell>
                                <TableCell>{medication.user_id}</TableCell>
                                <TableCell>{medication.medication_name}</TableCell>
                                <TableCell>{medication.dosage}</TableCell>
                                <TableCell>{medication.measurement}</TableCell>
                                <TableCell>{medication.frequency_hours}</TableCell>
                                <TableCell>{medication.time_of_intake}</TableCell>
                                <TableCell>{medication.start_date}</TableCell>
                                <TableCell>{medication.end_date}</TableCell>
                                <TableCell>{medication.created_at}</TableCell>
                                <TableCell>{medication.treatment_adherence ? 'Yes' : 'No'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default MedicationTable;
