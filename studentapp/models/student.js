//db student.js
const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
        age: Number,
        course: String,
        marks: Number
})
module.exports = mongoose.model('Student', studentSchema)
