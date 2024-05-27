import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, List, ListItem, ListItemText, Paper, Box } from '@mui/material';
import axios from 'axios';

const Chatbot = ({ userId }) => {
    const [message, setMessage] = useState('');
    const [conversations, setConversations] = useState([]);

    const fetchConversations = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/users/${userId}/conversations/`);
            setConversations(response.data);
        } catch (error) {
            console.error('Error fetching conversations:', error);
        }
    };

    useEffect(() => {
        fetchConversations();
    }, []);

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/conversations/', {
                user_id: userId,
                message,
            });
            setConversations([...conversations, response.data]);
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <Container>
            <Typography variant="h6" gutterBottom>
                Symptom Analysis Chatbot
            </Typography>
            <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
                <List>
                    {conversations.map((conv, index) => (
                        <ListItem key={index}>
                            <ListItemText
                                primary={`User: ${conv.message}`}
                                secondary={`Bot: ${conv.response}`}
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>
            <TextField
                label="Enter your symptom"
                fullWidth
                margin="normal"
                value={message}
                onChange={handleChange}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Send
            </Button>
        </Container>
    );
};

export default Chatbot;
