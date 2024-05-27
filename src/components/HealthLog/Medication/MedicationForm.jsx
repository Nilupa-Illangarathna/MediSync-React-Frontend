import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const MedicationForm = ({ fetchMedications }) => {
    const [medication, setMedication] = useState({
        user_id: '',
        medication_name: '',
        dosage: '',
        measurement: '',
        frequency_hours: '',
        time_of_intake: '',
        start_date: '',
        end_date: '',
        created_at: '',
        treatment_adherence: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMedication((prevMedication) => ({
            ...prevMedication,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/medications/', medication);
            fetchMedications();
        } catch (error) {
            console.error('Error adding medication:', error);
        }
    };

    return (
        <Container>
            <Typography variant="h6" gutterBottom>
                Add Medication
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField name="user_id" label="User ID" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="medication_name" label="Medication Name" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="dosage" label="Dosage" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="measurement" label="Measurement" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="frequency_hours" label="Frequency Hours" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="time_of_intake" label="Time of Intake" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="start_date" label="Start Date" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="end_date" label="End Date" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="created_at" label="Created At" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="treatment_adherence" label="Treatment Adherence" fullWidth margin="normal" onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary">
                    Add Medication
                </Button>
            </form>
        </Container>
    );
};

export default MedicationForm;
