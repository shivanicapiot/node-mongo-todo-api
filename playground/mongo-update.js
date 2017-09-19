const {
    MongoClient,
    ObjectID
} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log("Unable to Connect To Server");
    }
    console.log("Connection Establised Successfully!");
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('59bfb9ca7f46842551da722c')
    }, {
        $set: {
            task: "Go Window Shopping"
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log("todo", result);
    });
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59bf993232872b3379ea4f04')
    }, {
        $set: {
            name: "Shivani Dubey"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((resUser) => {
        console.log("user", resUser)
    })
})