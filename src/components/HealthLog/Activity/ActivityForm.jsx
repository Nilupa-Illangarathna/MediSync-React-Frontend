import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const ActivityForm = ({ fetchActivities }) => {
    const [activity, setActivity] = useState({
        user_id: '',
        activity_type: '',
        duration: '',
        steps_taken: '',
        calories_burned: '',
        avg_heart_rate: '',
        created_at: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setActivity((prevActivity) => ({
            ...prevActivity,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/activities/', activity);
            fetchActivities();
        } catch (error) {
            console.error('Error adding activity:', error);
        }
    };

    return (
        <Container>
            <Typography variant="h6" gutterBottom>
                Add Activity
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField name="user_id" label="User ID" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="activity_type" label="Activity Type" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="duration" label="Duration" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="steps_taken" label="Steps Taken" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="calories_burned" label="Calories Burned" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="avg_heart_rate" label="Average Heart Rate" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="created_at" label="Created At" fullWidth margin="normal" onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary">
                    Add Activity
                </Button>
            </form>
        </Container>
    );
};

export default ActivityForm;
