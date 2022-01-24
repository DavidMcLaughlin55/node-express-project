const express = require('express');
const app = express();
const port = 3000;
const projectsData = require('./data/data.json');

app.set('view engine', 'pug'); //sets view engine to "Pug"

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('public')); //Serves the static files located in the 'public' folder

//Routes
app.get('/', (req, res) => {
    res.render('index', { projects: projectsData.projects });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/project', (req, res) => {
    res.render('project');
});


//Listener 
app.listen(port, () => {
    console.log(`This app is running on Port: ${port}`)
});

