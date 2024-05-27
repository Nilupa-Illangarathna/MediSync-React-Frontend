import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Typography } from '@mui/material';

const SymptomTable = ({ fetchSymptoms, symptomLogs }) => {

    useEffect(() => {
        fetchSymptoms();
    }, [fetchSymptoms]);

    return (
        <Container>
            <Typography variant="h6" gutterBottom>
                Symptom Logs
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>User ID</TableCell>
                            <TableCell>Created At</TableCell>
                            <TableCell>Symptoms</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {symptomLogs.map((log) => (
                            <TableRow key={log.id}>
                                <TableCell>{log.id}</TableCell>
                                <TableCell>{log.user_id}</TableCell>
                                <TableCell>{log.created_at}</TableCell>
                                <TableCell>
                                    <ul>
                                        {log.symptoms.map((symptom) => (
                                            <li key={symptom.id}>{symptom.symptom_type} (Severity: {symptom.severity}, Duration: {symptom.duration})</li>
                                        ))}
                                    </ul>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default SymptomTable;
