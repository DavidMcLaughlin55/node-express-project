const express = require('express')
const app = express()
//const data = require('data.json')
console.log(data)
const port = 3000

app.set('view engine', 'pug') //sets "view engine to "Pug"
app.use('/static', express.static('public')) //Serves the static files located in the 'public' folder

app.get('/', (req, res) => {
    res.render('Home page!'); //An "index" route (/) to render the "Home" page with the locals set to data.projects
})

app.get('/about', (req, res) => {
    res.render("About page!"); //An "about" route (/about) to render the "About" page
})

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err)
})

//Error when webpage not found
app.use((err, req, res, next) => {
    res.local.error = err;
    res.status = err.status;
    res.render('error', err);
})

app.listen(port, () => {
    console.log(`This app is running on Port: ${port}`)
})

