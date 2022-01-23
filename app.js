const express = require('express');
//import JSON data
const app = express();
const port = 3000;

app.set('view engine', 'pug'); //sets "view engine to "Pug"

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('public')); //Serves the static files located in the 'public' folder

app.get('/', (req, res) => {
    console.log(data);
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/projects', (req, res) => {
    res.render('project');
});

app.listen(port, () => {
    console.log(`This app is running on Port: ${port}`)
});

