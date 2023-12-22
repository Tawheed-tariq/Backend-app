const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
port = process.env.PORT || 8000

const static_path = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


app.set('view engine', 'hbs')
app.set('views', templatePath)
hbs.registerPartials(partialsPath)
app.use(express.static(static_path))


app.get('', (req, res) => {
    res.render('index')
});

app.get('/about', (req,res) => {
    res.render('about')
})
// app.get('/weather', (req,res) => {
//     res.render('weather')
// })

app.get('*', (req,res) => {
    res.render('404error', {
        errMsg : "Oops, Page Not Found!"
    })
})

app.listen(port, (err) => {
    if(err)
        console.log("error occured " + err)
    console.log(`running on port ${port}`)
});