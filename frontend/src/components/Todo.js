import React from "react"
import axios from "axios"
import { Typography, Container, ButtonGroup, Button } from '@mui/material'

const Todo = (props) => {

    const handleDelete = async() => {
        let oldMessages = [...props.messages]
        await axios.delete(`http://localhost:5000/delete/${oldMessages[props.idx]._id}`)
        oldMessages.splice(props.idx, 1)
        props.messageSetter(oldMessages)
    }

    const handleDone = async() => {
        let oldMessages = [...props.messages]
        oldMessages[props.idx].isDone = !oldMessages[props.idx].isDone
        props.messageSetter(oldMessages)
        await axios.put(`http://localhost:5000/toggle/${oldMessages[props.idx]._id}`)
    }

    return (
        <Container>
            {props.text.isDone ? <Typography variant="h4" gutterBottom><s>{props.text.message}</s></Typography> : <Typography variant="h4" gutterBottom>{props.text.message}</Typography>}
            <ButtonGroup size="medium" variant="contained">
                <Button color="primary" onClick={handleDone}>&#10003;</Button>
                <Button color="warning" onClick={handleDelete}>&#10006;</Button>
            </ButtonGroup>
        </Container>
    )
}

export default Todo