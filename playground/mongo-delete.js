const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log("Unable to Connect To Server");
    }
    console.log("Connection Establised Successfully!");
    // 
    db.collection('Todos').findOneAndDelete({
        task: "Go Grocery Shopping"
    }).then((result) => {
        console.log(result)
    })
})