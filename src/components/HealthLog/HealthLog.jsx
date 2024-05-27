import {useState, useCallback} from 'react';
import ActivityForm from './Activity/ActivityForm.jsx';
import ActivityTable from './Activity/ActivityTable.jsx';
import MedicationForm from './Medication/MedicationForm';
import MedicationTable from './Medication/MedicationTable';
import SleepForm from './Sleep/SleepForm';
import SleepTable from './Sleep/SleepTable';
import TreatmentAdherenceForm from './TreatmentAdherence/TreatmentAdherenceForm';
import TreatmentAdherenceTable from './TreatmentAdherence/TreatmentAdherenceTable';
import axios from 'axios';
import {Box, Container, Typography} from '@mui/material';

const HealthLog = () => {
    const [activities, setActivities] = useState([]);
    const [medications, setMedications] = useState([]);
    const [sleepData, setSleepData] = useState([]);
    const [adherenceData, setAdherenceData] = useState([]);

    const fetchActivities = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:8001/users/1/activities/');
            setActivities(response.data);
        } catch (error) {
            console.error('Error fetching activities:', error);
        }
    }, []);

    const fetchMedications = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:8001/users/1/medications/');
            setMedications(response.data);
        } catch (error) {
            console.error('Error fetching medications:', error);
        }
    }, []);

    const fetchSleep = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:8001/users/1/sleep/');
            setSleepData(response.data);
        } catch (error) {
            console.error('Error fetching sleep data:', error);
        }
    }, []);

    const fetchTreatmentAdherence = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:8001/users/1/treatment_adherence/');
            setAdherenceData(response.data);
        } catch (error) {
            console.error('Error fetching treatment adherence data:', error);
        }
    }, []);

    return (
        <Container>
            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    Activity Log
                </Typography>
                <Box mb={4}>
                    <ActivityForm fetchActivities={fetchActivities}/>
                </Box>
                <ActivityTable fetchActivities={fetchActivities} activities={activities}/>
            </Box>

            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    Sleep Log
                </Typography>
                <Box mb={4}>
                    <SleepForm fetchSleep={fetchSleep}/>
                </Box>
                <SleepTable fetchSleep={fetchSleep} sleepData={sleepData}/>
            </Box>

            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    Medication Log
                </Typography>
                <Box mb={4}>
                    <MedicationForm fetchMedications={fetchMedications}/>
                </Box>
                <MedicationTable fetchMedications={fetchMedications} medications={medications}/>
            </Box>

            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    Treatment Adherence Log
                </Typography>
                <Box mb={4}>
                    <TreatmentAdherenceForm fetchTreatmentAdherence={fetchTreatmentAdherence}/>
                </Box>
                <TreatmentAdherenceTable fetchTreatmentAdherence={fetchTreatmentAdherence}
                                         adherenceData={adherenceData}/>
            </Box>
        </Container>
    );
};

export default HealthLog;


// const HealthLog = () => {
//
//     return (
//         <div>
//             <h1>Check Drug Interaction</h1>
//
//         </div>
//     );
// };
//
// export default HealthLog;

