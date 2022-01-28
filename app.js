const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug'); //sets view engine to "Pug"

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('public')); //Serves the static files located in the 'public' folder

//Routes
const homeRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectRoute = require('./routes/project');

app.use(homeRoute);
app.use('/about', aboutRoute);
app.use('/project', projectRoute);

//Error Handlers
app.use((req, res, next) => {
    const err = new Error();
    err.status = 404;
    err.message = "Oh no! It looks like something went wrong.";
    next(err);
});

app.use((err, req, res, next) => {
    if (err.status === 404) {
        console.log("Error 404");
        res.status = 404;
        res.render('error404', err);
    } else {
        console.log("Error 505")
        err.message = err.message;
        err.status = 500;
        res.render('error500', err);
    };
});

//Listener 
app.listen(port, () => {
    console.log(`This app is running on Port: ${port}`)
});

