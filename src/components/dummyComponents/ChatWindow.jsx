import { Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GenericChat from "../commons/genericChat/GenericChat";

const initialMessages = [
  {
    from: "doctor",
    time: new Date().toLocaleTimeString("en-US", { hour12: false }),
    message: "Hello, how can I assist you today?",
  },
  {
    from: "patient",
    time: new Date().toLocaleTimeString("en-US", { hour12: false }),
    message: "I'm experiencing chest pain and shortness of breath.",
  },
  {
    from: "doctor",
    time: new Date().toLocaleTimeString("en-US", { hour12: false }),
    message: "Please provide more details about your symptoms.",
  },
  // Add more initial messages as needed
];

const DoctorPatientChat = () => {
  const { requestId } = useParams();
  const [conversation, setConversation] = useState(initialMessages);

  const sendReply = (messageText) => {
    // Simulate delay before sending reply
    setTimeout(() => {
      const newReply = {
        from: "patient",
        time: new Date().toLocaleTimeString("en-US", { hour12: false }),
        message: generateReply(messageText),
      };
      setConversation([...conversation, newReply]);
    }, 1000); // Simulated delay of 1 second
  };

  // Function to generate a dummy reply based on the received message
  const generateReply = (messageText) => {
    // Dummy logic to generate a reply
    if (messageText.includes("chest pain")) {
      return "Based on your symptoms, it's important to consult a doctor immediately.";
    } else {
      return "Thank you for sharing. Let me review your symptoms and get back to you.";
    }
  };

  return (
    <Stack
      direction="column-reverse" // Change the direction to column-reverse
      justifyContent="center" // Center the chat vertically
      alignItems="center" // Center the chat horizontally
      spacing={1}
      paddingX={4}
      width="100%"
      sx={{ height: "100vh", marginTop: 0 }} // Set the height to fill the viewport and adjust marginTop
    >
      <GenericChat
        conversation={conversation}
        sender="doctor"
        sendReply={sendReply}
      />
      <Typography variant="h6" color="initial">
        Conversation
      </Typography>
    </Stack>
  );
};

export default DoctorPatientChat;
