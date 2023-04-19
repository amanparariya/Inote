// This Code for Connecting to MongoDB with localhost server
const mongoose = require('mongoose')
const MongoURI = 'mongodb://127.0.0.1:27017/mydatabase'

const connectToMongo = () => {
    mongoose.connect(MongoURI)
}

module.exports = connectToMongo