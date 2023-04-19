//This is Main/Head code of Entire Backend
const connectToMongo = require('./DB')
connectToMongo()

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => [
    res.send('This response make by Aman') 
])

app.get('/aman', require('./Routs/aman'));
app.get('/BodyRequest', require('./Routs/BdyRq'));

app.listen(port, () => {
    console.log(`You have connected with http://localhost:${port}`)
})