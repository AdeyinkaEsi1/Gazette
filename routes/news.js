const express = require('express');
require('dotenv').config();
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('WELCOME TO THE GAZETTE')
})


router.get('/newsapi/us1', async (req, res) => {
    const apikey = process.env.NEWSAPI_KEY;
    const apiUrl1 = `https://newsapi.org/v2/top-headlines?country=us&page=1&apiKey=${apikey}`;

    try {
        const fetch = (await import('node-fetch')).default;
        const response = (await fetch(apiUrl1))
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`)
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Error fetching news')
    }
});

router.get('/newsapi/us2', async (req, res) => {
    const apikey = process.env.NEWSAPI_KEY;
    const apiUrl2 = `https://newsapi.org/v2/top-headlines?country=us&page=2&apiKey=${apikey}`;

    try {
        const fetch = (await import('node-fetch')).default;
        const response = (await fetch(apiUrl2))
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`)
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error', error.message);
        res.status(500).send('Error fetching news')
    }
})


router.get('/newsapi/ca', async (req, res) => {
    const apikey = process.env.NEWSAPI_KEY;
    const apiUrl1 = `https://newsapi.org/v2/top-headlines?country=ca&page=1&apiKey=${apikey}`;

    try {
        const fetch = (await import('node-fetch')).default;
        const response = (await fetch(apiUrl1))
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`)
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error', error.message);
        res.status(500).send('Error fetching news')
    }
})




// ----------------------------------------------------------------------------------------------------

router.get('/nigeria', async (req, res) => {
    const apikey = process.env.MEDIASTACK_KEY3;
    const apiUrl2 = `http://api.mediastack.com/v1/news?access_key=${apikey}&countries=ng&sources=tribune`;
    try {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch(apiUrl2)
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`)
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Error fetching news')
    }
})


router.get('/usa', async (req, res) => {
    const apikey = process.env.MEDIASTACK_KEY3;
    const apiUrl2 = `http://api.mediastack.com/v1/news?access_key=${apikey}&countries=us&sources=cnn, bbc`;

    try {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch(apiUrl2)
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`)
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Error fetching news')
    }
})

router.get('/uk', async (req, res) => {
    const apikey = process.env.MEDIASTACK_KEY3;
    const apiUrl2 = `http://api.mediastack.com/v1/news?access_key=${apikey}&countries=gb&sources=the mirror, metro`;

    try {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch(apiUrl2)
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`)
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Error fetching news')
    }
})

module.exports = router

