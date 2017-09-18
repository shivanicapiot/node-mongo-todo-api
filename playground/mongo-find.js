const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log("Unable to Connect To Server");
    }
    console.log("Connection Establised Successfully!");
    // db.collection('Todos').find({completed: true}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log("Couldn't Fetch todos!")
    // })
    db.collection('Todos').find().count().then((count) => {
        console.log("Todos Count : " + count)
    })
})