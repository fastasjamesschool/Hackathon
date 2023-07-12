const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'CRUDLLC';
const projectsCollection = 'Projects';
const tasksCollection = 'Tasks';
const usersCollection = 'Users';

async function test() {
    return {"name":"John"}
}

async function Projects() {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(projectsCollection);
    const projects = await collection.find().toArray();
    client.close();
    return projects;
}

async function Tasks() {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(tasksCollection);
    const tasks = await collection.find().toArray();
    client.close();
    return tasks;
}

async function Users() {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(usersCollection);
    const users = await collection.find().toArray();
    client.close();
    return users;
}

module.exports = {test, Projects, Tasks, Users}