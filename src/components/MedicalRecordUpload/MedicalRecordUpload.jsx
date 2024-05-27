import React, {useState} from "react";
import {Box, Button, Checkbox, FormControlLabel, TextField, Typography} from "@mui/material";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

const MedicalRecordUpload = () => {
    const [formData, setFormData] = useState({
        patientId: "",
        patientName: "",
        age: "",
        gender: "",
        bloodGroup: "",
        medicalRecordFile: null,
        description: "",
        consent: false,
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const {name, value, checked, type} = event.target;
        const inputValue = type === "checkbox" ? checked : value;
        setFormData({...formData, [name]: inputValue});
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setFormData({...formData, medicalRecordFile: file});
    };

    const handleSubmit = () => {
        console.log("Submitting form...");
        const {patientId, patientName, age, gender, bloodGroup, medicalRecordFile, description, consent} = formData;

        // Implement form validation here
        const validationErrors = {};
        // Add validation logic here

        if (!patientId) validationErrors.patientId = "Please enter Patient ID.";
        if (!patientName) validationErrors.patientName = "Please enter Patient Name.";
        if (!age) validationErrors.age = "Please enter Age.";
        if (!gender) validationErrors.gender = "Please enter Gender.";
        if (!bloodGroup) validationErrors.bloodGroup = "Please enter Blood Group.";
        if (!medicalRecordFile) validationErrors.medicalRecordFile = "Please upload a Medical Record.";

        if (Object.keys(validationErrors).length === 0) {
            // If no errors, submit the form

            // Save file to the uploads folder
            const timestamp = Date.now(); // Unique suffix for file name
            const medicalRecordFileName = `medical_record_${timestamp}.pdf`;

            // Save medical record file
            if (medicalRecordFile) {
                const fileURL = URL.createObjectURL(medicalRecordFile);
                console.log("Medical Record File Address:", fileURL);
                // Save medical record file to src/uploads
                saveFile(medicalRecordFile, medicalRecordFileName);
            }

            // Create a single object with all form data including file address
            const formDataWithFileAddress = {
                patientId,
                patientName,
                age,
                gender,
                bloodGroup,
                medicalRecordFile: medicalRecordFileName,
                description,
                consent,
            };

            console.log("Form Data:", formDataWithFileAddress);

            // Clear form data after submission
            setFormData({
                patientId: "",
                patientName: "",
                age: "",
                gender: "",
                bloodGroup: "",
                medicalRecordFile: null,
                description: "",
                consent: false,
            });
            // Clear errors
            setErrors({});
            // Show alert for successful submission
            alert("Form submitted successfully!");
        } else {
            // If there are errors, update the state to display error messages
            setErrors(validationErrors);
        }
    };

    // Function to save file to uploads folder
    const saveFile = (file, fileName) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const result = event.target.result;
            const blob = new Blob([result], {type: file.type});
            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
        reader.readAsArrayBuffer(file);
    };

    return (
        <Box sx={{paddingTop: "2rem", width: "60%", margin: "0 auto"}}>
            <Typography variant="h6" sx={{fontWeight: "bold", color: "#000"}}>
                Upload Medical Record
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                marginTop: '1rem'
            }}>
                <Box sx={{width: "calc(50% - 1rem)", marginBottom: "1rem"}}>
                    <TextField name="patientId" variant="outlined" fullWidth value={formData.patientId}
                               onChange={handleInputChange} label="Patient ID"/>
                    {errors.patientId && <Typography variant="body2" color="error">{errors.patientId}</Typography>}
                </Box>
                <Box sx={{width: "calc(50% - 1rem)", marginBottom: "1rem"}}>
                    <TextField name="patientName" variant="outlined" fullWidth value={formData.patientName}
                               onChange={handleInputChange} label="Patient Name"/>
                    {errors.patientName && <Typography variant="body2" color="error">{errors.patientName}</Typography>}
                </Box>
                <Box sx={{width: "calc(50% - 1rem)", marginBottom: "1rem"}}>
                    <TextField name="age" type="number" variant="outlined" fullWidth value={formData.age}
                               onChange={handleInputChange} label="Age"/>
                    {errors.age && <Typography variant="body2" color="error">{errors.age}</Typography>}
                </Box>
                <Box sx={{width: "calc(50% - 1rem)", marginBottom: "1rem"}}>
                    <TextField name="gender" variant="outlined" fullWidth value={formData.gender}
                               onChange={handleInputChange} label="Gender"/>
                    {errors.gender && <Typography variant="body2" color="error">{errors.gender}</Typography>}
                </Box>
                <Box sx={{width: "calc(50% - 1rem)", marginBottom: "1rem"}}>
                    <TextField name="bloodGroup" variant="outlined" fullWidth value={formData.bloodGroup}
                               onChange={handleInputChange} label="Blood Group"/>
                    {errors.bloodGroup && <Typography variant="body2" color="error">{errors.bloodGroup}</Typography>}
                </Box>
                <Box sx={{width: "100%", marginBottom: "1rem"}}>
                    <Typography variant="body1" sx={{marginBottom: "0.5rem"}}>Upload Medical Record (PDF):</Typography>
                    <Box sx={{position: 'relative'}}>
                        <TextField variant="outlined" fullWidth/>
                        <input type="file" accept=".pdf" onChange={handleFileUpload} style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            opacity: 0,
                            cursor: 'pointer'
                        }}/>
                        <CloudUploadOutlinedIcon sx={{
                            position: 'absolute',
                            top: '50%',
                            right: '0.5rem',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer'
                        }}/>
                    </Box>
                    {errors.medicalRecordFile &&
                        <Typography variant="body2" color="error">{errors.medicalRecordFile}</Typography>}
                </Box>
                <Box sx={{width: "100%", marginBottom: "1rem"}}>
                    <Typography variant="body1" sx={{marginBottom: "0.5rem"}}>Description (Optional):</Typography>
                    <TextField name="description" variant="outlined" multiline rows={4} fullWidth
                               value={formData.description} onChange={handleInputChange}/>
                </Box>
                <FormControlLabel
                    control={<Checkbox name="consent" checked={formData.consent} onChange={handleInputChange}/>}
                    label="I consent to upload this medical record for evaluation and treatment purposes."
                />
            </Box>
            <Box sx={{width: "100%", marginBottom: "100px"}}>
                <Button variant="contained" size="small" onClick={handleSubmit}>
                    Upload Record
                </Button>
            </Box>
        </Box>
    );
};

export default MedicalRecordUpload;
