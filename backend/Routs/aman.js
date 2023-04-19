const express = require('express')
const router = express.Router()

router.get('/aman', (req, res) => {
    console.log("This is aman by aman router")
    obj = {
        name: "Aman",
        age: 20,
        class: "BCA",
        desc:
        {
            desc: "This is Amn, from Siwan BIhar,",
            Persuing: 'BCA', Skill: 'HTML, CSS, JavaScript, Bootstrap and React JS',
            Hobby: "Listning Song, Debating and Making Friend"
        }
    }
    res.json(obj)
})

module.exports = router