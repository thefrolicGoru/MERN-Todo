import mongoose from "mongoose"

const schema = mongoose.Schema

const todoSchema = new schema({
    message: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
})

const Todo = mongoose.model("Todo", todoSchema)

export default Todo