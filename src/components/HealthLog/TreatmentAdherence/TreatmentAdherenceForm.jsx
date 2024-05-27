import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const TreatmentAdherenceForm = ({ fetchTreatmentAdherence }) => {
    const [adherence, setAdherence] = useState({
        user_id: '',
        medication_id: '',
        intake_confirmed: '',
        notes: '',
        created_at: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdherence((prevAdherence) => ({
            ...prevAdherence,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/treatment_adherence/', adherence);
            fetchTreatmentAdherence();
        } catch (error) {
            console.error('Error adding treatment adherence:', error);
        }
    };

    return (
        <Container>
            <Typography variant="h6" gutterBottom>
                Add Treatment Adherence
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField name="user_id" label="User ID" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="medication_id" label="Medication ID" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="intake_confirmed" label="Intake Confirmed" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="notes" label="Notes" fullWidth margin="normal" onChange={handleChange} />
                <TextField name="created_at" label="Created At" fullWidth margin="normal" onChange={handleChange} />
                <Button type="submit" variant="contained" color="primary">
                    Add Treatment Adherence
                </Button>
            </form>
        </Container>
    );
};

export default TreatmentAdherenceForm;
