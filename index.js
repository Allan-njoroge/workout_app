const express = require('express');
const app = express()
const dotenv = require('dotenv');
const path = require('path');
const authRoute = require("./routes/auth")
const exercisesRoute = require("./routes/exercises")

dotenv.config()
app.use(express.static(path.join(__dirname, 'public')))

// Redirection of website pages
// home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/website/home.html'))
})
// about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/website/about.html'))
})
// contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/website/contact.html'))
})
// signup page
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/website/signup.html'))
})
// login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/website/login.html'))
})

// discover page
app.get('/discover', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/user/discover.html'))
})
// my-exercises page
app.get('/my-exercise', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/user/my-exercises.html'))
})
// profile page
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/user/profile.html'))
})




// authorization page login and sign-up
app.use('/api/auth', authRoute)

// exercises
app.use('/api/exercises', exercisesRoute)



// Port configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}...`)
})