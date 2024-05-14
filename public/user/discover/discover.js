// const axios = require('axios')
import dotenv from 'dotenv';
dotenv.config()

const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

const fetchData = async (url, options) => {
    try {
        const response = await fetch(url, options)
        const data = await response.json()
        return data
    } catch (error) {
        throw error;
    }
}

// search exercise funcitonality
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', async () => {
    alert(`clicked`)
    const search = document.querySelector('#search').value;

    const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

    if(search){
        console.log(exerciseData)
    }
})