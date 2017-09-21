const jwt = require('jsonwebtoken');
var data = {
    id: 1
}
var token = jwt.sign(data, 'shivani');
console.log("JWT Token", token);
var decoded = jwt.verify(token, 'shivani');
console.log("Verified JWT", decoded)