const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

async function test() {
    return {"name":"John"}
}
module.exports = {test}