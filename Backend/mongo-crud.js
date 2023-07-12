const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

async function test() {
    return "hello this is the test!"
}
module.exports = {test}