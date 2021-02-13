const express = require('express')
const app = express()

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(express.static('public'))

//app.use(express.json())
//app.use(express.urlencoded({extended: false}))

app.get('/', function(req,res){
    res.render('hello')
})
app.listen(8080)