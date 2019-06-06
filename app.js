const express = require('express');

const app = express();


app.get('/', (request, response) => {
	response.send('welcome to our site.');
});

app.get('/about', (request, response) => {
	response.send('Awesome weather.');
});

app.listen(4000, ()  => console.log('listening on port 4000'));