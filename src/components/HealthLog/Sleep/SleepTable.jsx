import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Typography } from '@mui/material';
import axios from 'axios';

const SleepTable = ({ fetchSleep, sleepData }) => {

    useEffect(() => {
        fetchSleep();
    }, [fetchSleep]);

    return (
        <Container>
            <Typography variant="h6" gutterBottom>
                Sleep Log
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>User ID</TableCell>
                            <TableCell>Start Time</TableCell>
                            <TableCell>End Time</TableCell>
                            <TableCell>Sleep Quality</TableCell>
                            <TableCell>Interruptions</TableCell>
                            <TableCell>Created At</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sleepData.map((sleep) => (
                            <TableRow key={sleep.id}>
                                <TableCell>{sleep.id}</TableCell>
                                <TableCell>{sleep.user_id}</TableCell>
                                <TableCell>{sleep.start_time}</TableCell>
                                <TableCell>{sleep.end_time}</TableCell>
                                <TableCell>{sleep.sleep_quality}</TableCell>
                                <TableCell>{sleep.interruptions}</TableCell>
                                <TableCell>{sleep.created_at}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default SleepTable;
