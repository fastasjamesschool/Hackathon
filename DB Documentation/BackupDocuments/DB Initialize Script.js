db.Users.drop()
db.Tasks.drop()
db.Projects.drop()
db.createCollection("Users")
db.Users.insertMany([{
    "Username": "Jdoe",
    "First Name":"John",
    "Last Name": "Doe",
    "Password": "12345",
    "ManagerRole":"True"
},
    {"Username": "Jdarn",
    "First Name":"John",
    "Last Name": "Darn",
    "Password": "123456",
    "ManagerRole":"False"}])
db.createCollection("Tasks")
db.Tasks.insertOne({
    "Task Number": "1",
    "ProjectId": "1",
    "Descirption": "This is a demo",
    "Complete/Not Complete Status": "True",
    "People Assigned": ["John Doe","John Darn"],
    "Due Date": "7-17-23",
    "Estimated Duration": "6 Hours"
})
db.createCollection("Projects")
db.Projects.insertOne({
    "ProjectId":"1",
    "ProjectName":"Mongoose",
    "Team Size":"2",
    "Budget":"$10,000",
    "Workload":"80",
    "Completion Time":"30"
})