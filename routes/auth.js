const express = require('express')
const router = express.Router();

router.get('/signup', (req,res) => {
    res.send('signup path')
})

router.get('/login', (req, res) => {
    res.send('login path')
})

module.exports = router;