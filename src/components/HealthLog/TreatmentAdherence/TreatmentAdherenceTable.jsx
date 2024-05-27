import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Typography } from '@mui/material';
import axios from 'axios';

const TreatmentAdherenceTable = ({ fetchTreatmentAdherence, adherenceData }) => {

    useEffect(() => {
        fetchTreatmentAdherence();
    }, [fetchTreatmentAdherence]);

    return (
        <Container>
            <Typography variant="h6" gutterBottom>
                Treatment Adherence Log
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>User ID</TableCell>
                            <TableCell>Medication ID</TableCell>
                            <TableCell>Intake Confirmed</TableCell>
                            <TableCell>Notes</TableCell>
                            <TableCell>Created At</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {adherenceData.map((adherence) => (
                            <TableRow key={adherence.id}>
                                <TableCell>{adherence.id}</TableCell>
                                <TableCell>{adherence.user_id}</TableCell>
                                <TableCell>{adherence.medication_id}</TableCell>
                                <TableCell>{adherence.intake_confirmed ? 'Yes' : 'No'}</TableCell>
                                <TableCell>{adherence.notes}</TableCell>
                                <TableCell>{adherence.created_at}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default TreatmentAdherenceTable;
