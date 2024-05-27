import React, {useState} from "react";
import {Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel,} from "@mui/material";

const ServiceSelectionDialog = ({open, handleClose, services, handleServiceSelection}) => {
    const [selectedServices, setSelectedServices] = useState([]);

    const handleCheckboxChange = (serviceId) => {
        const isSelected = selectedServices.includes(serviceId);
        if (isSelected) {
            setSelectedServices(selectedServices.filter((id) => id !== serviceId));
        } else {
            setSelectedServices([...selectedServices, serviceId]);
        }
    };

    const handleConfirm = () => {
        handleServiceSelection(selectedServices);
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Select Services</DialogTitle>
            <DialogContent>
                {services.map((service) => (
                    <FormControlLabel
                        key={service.id}
                        control={<Checkbox checked={selectedServices.includes(service.id)}
                                           onChange={() => handleCheckboxChange(service.id)}/>}
                        label={service.name}
                    />
                ))}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleConfirm}>Confirm</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ServiceSelectionDialog;