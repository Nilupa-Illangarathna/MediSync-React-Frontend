import React, { useState } from 'react';
import { TextField, Button, Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const SymptomForm = ({ fetchSymptoms }) => {
    const [symptom, setSymptom] = useState('');
    const [severity, setSeverity] = useState('');
    const [duration, setDuration] = useState('');
    const [notes, setNotes] = useState('');
    const [symptoms, setSymptoms] = useState([]);

    const handleAddSymptom = () => {
        const newSymptom = {
            symptom_type: symptom,
            severity: parseFloat(severity),
            duration: parseFloat(duration),
            notes,
            created_at: new Date().toISOString(),
        };
        setSymptoms([...symptoms, newSymptom]);
        setSymptom('');
        setSeverity('');
        setDuration('');
        setNotes('');
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/symptom_logs/', {
                user_id: 1,
                created_at: new Date().toISOString(),
                symptoms,
            });
            fetchSymptoms();
        } catch (error) {
            console.error('Error adding symptom log:', error);
        }
    };

    return (
        <Container>
            <Typography variant="h6" gutterBottom>
                Log Symptoms
            </Typography>
            <TextField
                label="Symptom"
                fullWidth
                margin="normal"
                value={symptom}
                onChange={(e) => setSymptom(e.target.value)}
            />
            <TextField
                label="Severity"
                fullWidth
                margin="normal"
                value={severity}
                onChange={(e) => setSeverity(e.target.value)}
            />
            <TextField
                label="Duration"
                fullWidth
                margin="normal"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
            />
            <TextField
                label="Notes"
                fullWidth
                margin="normal"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleAddSymptom}>
                Add Symptom
            </Button>
            <List>
                {symptoms.map((symptom, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={symptom.symptom_type} secondary={`Severity: ${symptom.severity}, Duration: ${symptom.duration}, Notes: ${symptom.notes}`} />
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit Symptoms
            </Button>
        </Container>
    );
};

export default SymptomForm;
