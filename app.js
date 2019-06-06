const express = require('express');

const app = express();


app.get('/', (request, response) => {
	response.send('welcome to our site.');
});

app.get('/about', (request, response) => {
	response.send('Awesome weather.');
});

const port = process.env.PORT || 4000;
app.listen(port, ()  => console.log(`listening on port ${port}`));