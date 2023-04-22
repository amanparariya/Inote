//This is Main/Head code of Entire Backend
const connectToMongo = require('./DB')
connectToMongo()
 
const express = require('express')
const app = express()
const port = 3000
  
//This is Using for req.body
app.use(express.json())
   
app.get('/', (req, res) => [
    res.send('This response make by Aman') 
])

app.get('/aman', require('./routes/aman')); 
app.get('/BodyRequest', require('./routes/BodyRequest'));
app.get('/PracOfSchema', require('./routes/PracOfSchema')); //For Practise Schema

app.listen(port, () => {
    console.log(`You have connected with http://localhost:${port}`)
})