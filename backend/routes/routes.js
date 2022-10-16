import express from "express"
import Todo from "../models/todo.js"
const router = express.Router()

router.get("/", async(req, res) => {
    const todos = await Todo.find()
    res.json(todos)
})

router.post("/add", async(req, res) => {
    const newMessage = {
        message: req.body.message,
        isDone: req.body.isDone
    }
    const newTodo = new Todo(newMessage)
    await newTodo.save()
    res.json("Added Todo")
})

router.put("/toggle/:id", async(req, res) => {
    let todo = await Todo.findById(req.params.id)
    todo.isDone = !todo.isDone
    await todo.save()
    res.json("Updated Todo")
})

router.delete("/delete/:id", async(req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json("Deleted Todo")
})

export default router