// Create a variable for express which will help run the server
const express = require('express')

// create a path variable which can find files on our server
const path = require('path')

// use express to initialize our server application
const app = express()

//Tell node to compile .pug files to HTML
app.set('view engine', 'pug')

// Tell node where our public/static assets are (css, js, images, etc.)
app.use(express.static(path.join(__dirname, './public')))


//Set up our Routes
app.get('/', function(req, res) {
    res.render('index', {title:'Home'})
      
})
app.get('/about', function(req, res) {
    res.render('about', {title:'About'})
      
})
app.get('/contact', function(req, res) {
    res.render('contact', {title:'Contact'})
      
})

app.post('/contact', function(req, res) {
    res.render('thankyou', {title:'Thank You'})
})

app.get('/images', function(req, res) {
    res.render('images', {title:'My Images'})
      
})



//this route is for the full image
// It uses a route parameter
app.get('/images/:id', function(req, res) {
    const fullImage = req.params.id
    res.render('full-image', {title:`Image ${fullImage}`, id:fullImage})
})

// Tell the server how to start
// Our Port will now use an environment variable if it's on
// heroku...otherwise, use 3000
const port = process.env.PORT || 3000
app.listen(port, function() {
    console.log(`server is running on PORT ${port}`)
})

