import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const SleepForm = ({ fetchSleep }) => {
    const [sleep, setSleep] = useState({
        user_id: '',
        start_time: '',
        end_time: '',
        sleep_quality: '',
        interruptions: '',
        created_at: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSleep((prevSleep) => ({
            ...prevSleep,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/sleep/', sleep);
            fetchSleep();
        } catch (error) {
            console.error('Error adding sleep data:', error);
        }
    };

    return (
        <Container>
            <Typography variant="h6" gutterBottom>
                Add Sleep Data
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField name="user_id" label="User ID" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="start_time" label="Start Time" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="end_time" label="End Time" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="sleep_quality" label="Sleep Quality" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="interruptions" label="Interruptions" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="created_at" label="Created At" fullWidth margin="normal" onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary">
                    Add Sleep Data
                </Button>
            </form>
        </Container>
    );
};

export default SleepForm;
