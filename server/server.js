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
var {
    ObjectID
} = require('mongodb')

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
        res.status(200).send({
            doc
        })
    }, (err) => {
        res.status(400).send(err);
    })
})
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (ObjectID.isValid(id)) {
        Todo.findById(id).then((todo) => {
            if (!todo) {
                return res.status(404).send();
            }
            res.status(200).send(todo)
        }, (err) => {
            res.status(404).send()
        })
    } else {
        return res.status(400).send("Invalid ID")
    }

})
app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (ObjectID.isValid(id)) {
        Todo.findByIdAndRemove(id).then((todo) => {
            if (!todo) {
                return res.status(404).send();
            }
            res.status(200).send(todo)
        }, (err) => {
            res.status(404).send()
        })
    } else {
        return res.status(400).send("Invalid ID")
    }

})
app.listen(4000, () => {
    console.log("Server Started On Port 4000");
})