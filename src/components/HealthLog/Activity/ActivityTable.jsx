import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Typography } from '@mui/material';
import axios from 'axios';

const ActivityTable = ({ fetchActivities, activities }) => {

    useEffect(() => {
        fetchActivities();
    }, [fetchActivities]);

    return (
        <Container>
            <Typography variant="h6" gutterBottom>
                Activity Log
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>User ID</TableCell>
                            <TableCell>Activity Type</TableCell>
                            <TableCell>Duration</TableCell>
                            <TableCell>Steps Taken</TableCell>
                            <TableCell>Calories Burned</TableCell>
                            <TableCell>Avg Heart Rate</TableCell>
                            <TableCell>Created At</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {activities.map((activity) => (
                            <TableRow key={activity.id}>
                                <TableCell>{activity.id}</TableCell>
                                <TableCell>{activity.user_id}</TableCell>
                                <TableCell>{activity.activity_type}</TableCell>
                                <TableCell>{activity.duration}</TableCell>
                                <TableCell>{activity.steps_taken}</TableCell>
                                <TableCell>{activity.calories_burned}</TableCell>
                                <TableCell>{activity.avg_heart_rate}</TableCell>
                                <TableCell>{activity.created_at}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ActivityTable;
