const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'CRUDLLC';
const projectsCollection = 'Projects';
const tasksCollection = 'Tasks';
const usersCollection = 'Users';

async function test() {
    return {"name":"John"}
}

async function Projects(username) {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(projectsCollection);
    const projects = await collection.find({AssignedUsers: username}).toArray();
    console.log({username})
    client.close();
    return projects;
}

async function findProject(projectId) {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(projectsCollection);
    const project = await collection.find({ProjectId: Number(projectId)}).toArray();
    client.close();
    return project;
}

async function findTasksForProject(projectId) {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(tasksCollection);
    const tasks = await collection.find({ProjectId: Number(projectId)}).toArray();
    client.close();
    return tasks;
}

async function findTask(taskId) {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(tasksCollection);
    const tasks = await collection.find({TaskId: Number(taskId)}).toArray();
    client.close();
    return tasks;
}

async function userInDb(username) {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(usersCollection);
    const user = await collection.find({Username: username}).toArray();
    client.close();
    return user;
}

async function Users() {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(usersCollection);
    const users = await collection.find().toArray();
    client.close();
    return users;
}

module.exports = {test, Projects,findProject, findTasksForProject,findTask, userInDb, Users}