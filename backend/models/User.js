const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    name: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    number: {
        type: Number,
        required: true,
        unique: true
    },
    passward: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model("user", UserSchema)