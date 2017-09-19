var express = require('express');
var bodyParser = require('body-parser')

var {
    mongoose
} = require('./db/mongoose')
var {
    user
} = require('./models/user');
var {
    Todo
} = require('./models/todo');

var app = express();
app.use(bodyParser.json());
app.post('/todos', (req, res) => {
    var newTodo = new Todo({
        text: req.body.text
    })
    newTodo.save().then((result) => {
        res.status(200).send(result)
    }, (err) => {
        res.status(400).send(err);
    })
})
app.get('/todos', (req, res) => {
    Todo.find().then((doc) => {
        res.status(200).send({doc})
    }, (err) => {
        res.status(400).send(err);
    })
})
app.listen(4000, () => {
    console.log("Server Started On Port 4000");
})