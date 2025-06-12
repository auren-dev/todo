import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 30
    },
    description: {
        type: String
    },
    isComplete: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    timestamps: true // createdAt, updatedAt 속성 자동 생성
})

const Task = mongoose.model('Task', TaskSchema) // MongoDB: tasks

export default Task