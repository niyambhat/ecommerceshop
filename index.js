const express = require('express');
const app = express();
const db = require ('./util/database')
var bodyParser = require('body-parser')
const axios = require('axios');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/contact', function (req, res) {
    res.redirect('contact.html')
  })

  app.get('/news', function (req, res) {
    res.redirect('news.html')
  })
  app.get('/products', function (req, res) {
    res.redirect('products.html')
  })
  app.get('/about', function (req, res) {
    res.redirect('about.html')
  })
  app.get('/admin', function (req, res) {
    res.redirect('admin.html')
  })


  app.post('/test',(req,res,next)=>{
    let email = req.body.email;
    let message =req.body.message;
    console.log(`${email}, ${message}`)
    db.query(`insert into customers(email, message) values('${email}','${message}') `)
    res.redirect('/admin')
  })

  app.get('/test',(req,res,next)=>{
    db.query(`SELECT * FROM customers`, function (err, result, field){
      if(err) throw err;
      res.send(result)
    })
  })

// db.query('CREATE TABLE customers ( id int NOT NULL AUTO_INCREMENT, email VARCHAR(255), message VARCHAR(255), PRIMARY KEY (id))')



  

  app.listen(3000)