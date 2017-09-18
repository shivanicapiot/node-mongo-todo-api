const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log("Unable To Connect To Mongodb Server")
    }
    console.log("Connection Established Successfully!");
    // db.collection('Todos').insertOne({
    //     "task": "Go Movie Watching",
    //     "completed": false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable To Insert Data!!")
    //     }
    //     console.log("Data Inserted Successfully:")
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })
    db.collection('Users').insertOne({
        name: "Sebi",
        age: 29,
        location: "Indonesia"
    }, (err, result) => {
        if (err) {
            return console.log("Unable To Insert Data in Users Collection!!");
        }
        console.log("Data Inserted Successfully :");
        console.log(JSON.stringify(result.ops, undefined, 2))
        console.log("timeStamp Of Created Doc is : " + result.ops[0]._id.getTimestamp())
    })
    db.close();

});