const {
    SHA256
} = require('crypto-js');
var message = "I am Shivani"
var hash = SHA256(message).toString();
console.log("message: ", message);
console.log("hash : ", hash)
var data = {
    id: 2
}
var token = {
    data: data,
    hash: SHA256(JSON.stringify(data) + 'shivani').toString()
}
token.data.id = 3;
token.data.hash = SHA256(JSON.stringify(token.data)).toString();
var resultHash = SHA256(JSON.stringify(token.data) + 'shivani').toString();
if (resultHash === token.hash) {
    console.log("Data Was Not Changed!")
} else {
    console.log("Data Was Changed,Dont Trust!")
}