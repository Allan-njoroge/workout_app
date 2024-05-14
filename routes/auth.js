import express from 'express';
const router = express.Router();

router.get('/signup', (req,res) => {
    res.send('signup path')
})

router.get('/login', (req, res) => {
    res.send('login path')
})

export default router;