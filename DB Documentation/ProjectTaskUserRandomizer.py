from faker import Faker
import json
import random
import datetime


faker = Faker()
users_file_name = "users.json"
projects_file_name= "projects.json"
tasks_file_name = "tasks.json"
users = []
projects = []
tasks = []
number_of_projects = 1000
number_of_users = 30
number_of_tasks = 4000

for i in range(number_of_users):
        firstName = faker.first_name()
        lastName = faker.last_name()
        username = firstName[0]+lastName
        for use in users:
            if username == use["Username"]:
                username = username+str(1) 
        user = {
            "Username": username,
            "First Name": firstName,
            "Last Name": lastName,
            "Password": faker.password(),
            "Manager Role": faker.boolean(30) #Designates a 30% chance that the worker is a manager
        }
        users.append(user)
print(users)

with open(users_file_name, 'w') as file:
    file.write(json.dumps(users, indent=2))

for i in range(number_of_projects):
        assignedUsers=[]
        for user in range(0,faker.random_int(1,3)):
            assignedUsers.append(users[faker.random_int(0,number_of_users-1)]["Username"])
        project = {
            "ProjectId":i,
            "ProjectName":' '.join(faker.words(2)).capitalize(),
            'Description': faker.paragraph(nb_sentences=5),
            "AssignedUsers": assignedUsers,
            "Budget":faker.random_int(3000, 50000),
            "Workload":faker.random_int(15,85),
            "CompletionTime":faker.random_int(10, 115),
        }
        projects.append(project)

with open(projects_file_name, 'w') as file:
    file.write(json.dumps(projects, indent=2))

for i in range(number_of_tasks):
        assignedProject = (projects[faker.random_int(0,number_of_projects-1)])
        assignedUser=(assignedProject["AssignedUsers"])
        projectId = assignedProject["ProjectId"]
        assignedUser=(assignedUser[faker.random_int(0,len(assignedUser)-1)])
        task = {
            "TaskId":i,
            "TaskName":' '.join(faker.words(2)).capitalize(),
            'Description': faker.paragraph(nb_sentences=5),
            "AssignedUser": assignedUser,
            "ProjectId" : projectId,
            "Due Date": faker.date_this_year().strftime("%Y-%m-%d"),
            "Estimated Duration": faker.random_int(1,45)
        }
        tasks.append(task)

with open(tasks_file_name, 'w') as file:
    file.write(json.dumps(tasks, indent=2))