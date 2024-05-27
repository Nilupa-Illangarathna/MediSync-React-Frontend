import {useState, useCallback} from 'react';
import Chatbot from './Chatbot';
import SymptomForm from './SymptomForm';
import SymptomTable from './SymptomTable';
import axios from 'axios';
import {Container, Typography, Box} from '@mui/material';

const SymptomAnalysis = () => {
    const [symptomLogs, setSymptomLogs] = useState([]);


    const fetchSymptoms = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:8000/users/1/symptom_logs/');
            setSymptomLogs(response.data);
        } catch (error) {
            console.error('Error fetching symptoms:', error);
        }
    }, []);

    return (
        <Container>
            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    Symptom Analysis Chatbot
                </Typography>
                <Chatbot userId={1}/>
            </Box>

            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    Symptom Logs
                </Typography>
                <SymptomForm fetchSymptoms={fetchSymptoms}/>
                <SymptomTable fetchSymptoms={fetchSymptoms} symptomLogs={symptomLogs}/>
            </Box>
        </Container>
    );
};

export default SymptomAnalysis;
