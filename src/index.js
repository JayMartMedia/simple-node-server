import express from 'express';

// setup express
const app = express();
const port = 3000;

const myUnusedVariable = 2;

// setup routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// start express
app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});