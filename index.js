import express from 'express';
const app = express()
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import path from 'path';
import authRoute from './routes/auth.js'
import exercisesRoute from './routes/exercises.js'

dotenv.config()

//  resolve the directory name
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));




//========== Redirection of website pages
// home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/website/home.html'))
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




//========== redirection to app page
// discover page
app.get('/discover', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/user/discover.html'))
})
// my-exercises page
app.get('/my-collection', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/user/my-collection.html'))
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