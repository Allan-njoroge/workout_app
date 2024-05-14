import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
const router = express.Router();


dotenv.config()

// endpoint to get all excercises
router.get('/', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        headers: {
          'X-RapidAPI-Key': process.env.API_KEY,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          res.status(200).json(response.data)
      } catch (error) {
        res.status(500).json({ error: `Internal Server Error` })
      }
})

// endpoint to get excercise by id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);

        // Check if the response contains the exercise with the provided ID
        if (response.data.find(exercise => exercise.id === id)) {
            res.status(200).json(response.data);
        } else {
            res.status(404).json();
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

// endpoint to get excercise by name
router.get('/:name', async (req, res) => {
    const name = req.params.name;
    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${name}`,
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);

        // Check if the response contains the exercise with the provided ID
        if (response.data.find(exercise => exercise.name === name)) {
            res.status(200).json(response.data);
        } else {
            res.status(404).json();
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

// endpoint to get exercise by body parts
router.get('/muscle-group', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        res.status(200).json(response.data)
    } catch (err) {
        res.status(500).json({ error: `Internal Server Error` })
    }

})

// endpoint to target a specific muscle group
router.get('/muscle-group/:name', async (req, res) => {
    const name = req.params.name
    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${name}`,
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);

        // logic to check for the group
        if(response.data.find(exercise => exercise.bodyPart.toLowerCase() === name.toLowerCase())) {
            res.status(200).json(response.data)
        } else {
            res.status(404).json()
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

// endpoint to get the specific body part section being exercised
router.get('/muscle', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/targetList',
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json()
    }
})

// endpoint to get excercise by the muscle group they target
router.get('/muscle/:name', async (req, res) => {
    const name = req.params.name
    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/target/${name}`,
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);

        // logic to check for the group
        if(response.data.find(exercise => exercise.target.toLowerCase() === name.toLowerCase())) {
            res.status(200).json(response.data)
        } else {
            res.status(404).json()
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

// endpoint to get exercises by equipment used
router.get('/equipment', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/equipmentList',
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        res.status(200).json(response.data)
    } catch (error) {
        console.error(error);
    }
})

// endpoint to get exercise by equipement used
router.get('/equipment/:name', async (req, res) => {
    const name = req.params.name
    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/equipment/${name}`,
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);

        // logic to check for the group
        if(response.data.find(exercise => exercise.equipment.toLowerCase() === name.toLowerCase())) {
            res.status(200).json(response.data)
        } else {
            res.status(404).json()
        }
    } catch (error) {
        res.status(500).json(error)
    }
})


export default router;