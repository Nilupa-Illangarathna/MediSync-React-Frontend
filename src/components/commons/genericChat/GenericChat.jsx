import {Avatar, Button, Chip, Stack, TextField, Typography,} from "@mui/material"
import React, {useState} from "react"

const GenericChat = ({conversation, sender, sendMessage}) => {
    const [messageText, setMessageText] = useState("")

    const handleSendMessage = () => {
        if (messageText.trim()) {
            sendMessage(messageText)
            setMessageText("") // Clear input field after sending
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            handleSendMessage()
            setMessageText("")
        }
    }

    return (
        <>
            <Stack
                direction='column'
                justifyContent='flex-start'
                alignItems='stretch'
                spacing={2}
                width='50%'
            >
                <Stack
                    direction='column'
                    spacing={2}
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                        margin: "auto",
                    }}
                >
                    <TextField
                        placeholder='Write a message'
                        multiline
                        maxRows={4}
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onKeyPress={handleKeyPress}
                        variant='outlined'
                        fullWidth
                    />
                    <Button
                        onClick={handleSendMessage}
                        variant='contained'
                        color='primary'
                        fullWidth
                    >
                        Send
                    </Button>
                </Stack>
                {conversation
                    .slice()
                    .reverse()
                    .map((message, index) => (
                        <Stack
                            key={index}
                            direction='row'
                            justifyContent={
                                message.from === sender ? "flex-end" : "flex-start"
                            }
                            alignItems='center'
                            spacing={2}
                        >
                            {message.from !== sender && <Avatar/>}
                            <Stack
                                direction='column'
                                justifyContent='flex-start'
                                alignItems={message.from === sender ? "flex-end" : "flex-start"}
                                spacing={1}
                                bgcolor='lightgray'
                                padding={2}
                            >
                                <Typography variant='body1' color='initial'>
                                    {message.message}
                                </Typography>
                                <Chip size='small' label={message.time}/>
                            </Stack>
                            {message.from === sender && <Avatar/>}
                        </Stack>
                    ))}
            </Stack>
        </>
    )
}

export default GenericChat
