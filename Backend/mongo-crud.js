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
    // console.log({username})
    client.close();
    return projects;
}

async function Role(username) {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(usersCollection);
    const user = await collection.find({Username: username}).toArray();
    const role = user[0]["Manager Role"]
    //console.log({role})
    client.close();
    return role;
}

async function findProject(username, projectId) {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(projectsCollection);
    const project = await collection.find({"$and":[{AssignedUsers: username}, {ProjectId: Number(projectId)}]}).toArray();
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

async function insertTask(task) {
    // console.log(task.assignedUser)
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(tasksCollection);
    const curHighestTask = await collection.find().sort({TaskId:-1}).limit(1).toArray();
    const curHighestTaskId = curHighestTask[0].TaskId
    console.log(curHighestTaskId)
    const taskToInsert = {TaskId: curHighestTaskId + 1,
        TaskName: task.taskName,
        Description: task.description,
        AssignedUser: [task.assignedUser],
        ProjectId: Number(task.projectId),
        'Due Date': task.dueDate,
        'Estimated Duration': Number(task.estimatedDuration)}
    const returnTask = await collection.insertOne(taskToInsert)
    // console.log(taskToInsert)
    client.close();
    return returnTask;
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

module.exports = {test, Projects,findProject, findTasksForProject,findTask, userInDb, insertTask, Tasks, Role, Users}