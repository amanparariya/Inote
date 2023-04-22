// This Code for Connecting to MongoDB with localhost server
const mongoose = require('mongoose')
const MongoURI = 'mongodb://127.0.0.1:27017/Inote'

const connectToMongo = async () => {
    await mongoose.connect(MongoURI)
    console.log("Connected to MongoDb Sucessfully")
}

module.exports = connectToMongo