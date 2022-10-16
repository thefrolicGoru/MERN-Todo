import React, { useState, useEffect } from "react"
import axios from "axios"
import Todo from "./Todo"
import { Typography, Input, Container, Button } from '@mui/material'

const TodoList = () => {
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])

    const handleAddClick = async() => {
        setMessages([...messages, {message: message, isDone: false}])
        await axios.post("http://localhost:5000/add", {
            message: message,
            isDone: false
        })
        setMessage("")
    }

    useEffect(() => {
        const fetchTodos = async() => {
            const res = await axios.get("http://localhost:5000/")
            const data = res.data
            setMessages(data)
        }
        fetchTodos()
    }, [])

    return (
        <Container>
            <Typography variant="h2" align="center" gutterBottom>TODO LIST</Typography>
            <Input margin="dense" fullWidth value={message} onChange={(event) => setMessage(event.target.value)}/>
            {message.length > 0 && <Button variant="contained" onClick={handleAddClick}>+</Button>}
            <Container sx={{display: "flex"}}>
                {messages.map((text, idx) => {
                    return <Todo key={idx} idx={idx} text={text} messages={messages} messageSetter={setMessages}/>
                })}
            </Container>
        </Container>
    )
}

export default TodoList