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
number_of_tasks = 5000

def write(file_name,file_list):
    with open(file_name, 'w') as file:
        file.write(json.dumps(file_list, indent=2))
    print(file_name,"created")
    # Writes chosen list to the file specified 

for i in range(number_of_users):
        # Here first name and last names are established so that username can be
        firstName = faker.first_name()
        lastName = faker.last_name()
        username = firstName[0]+lastName
        # This checks if anyone has the same username and if so adds one.
        # In the future check if the same then check if there is a number at the end
        # then increment by one
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
        #Adds the dictionary to the list

write(users_file_name,users)
#Common function that takes the preferred file name and the list to be written to file
for i in range(number_of_projects):
        #This randomly checks finds a user, then checks to see if they are already in the list
        #There was a low chance to have duplicate users on a project but this stops that possibility
        assignedUsers=[]
        ranInt = faker.random_int(1,3)
        for user in range(0,ranInt):
            projectUser=(users[faker.random_int(0,number_of_users-1)]["Username"])
            if len(assignedUsers) == 0:
                 assignedUsers.append(projectUser)
            else:
                for user in range(0,len(assignedUsers)):
                    if projectUser in assignedUsers:
                        ranInt+=1
                    else:
                        assignedUsers.append(projectUser)
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
        #Adds the dictionary to the list

write(projects_file_name,projects)
#Common function that takes the preferred file name and the list to be written to file

for i in range(number_of_tasks):
        #Since assignedProject is needed for both assignedUsers and projectId assignedProject is created
        #make sure that projectId is first recovered
        assignedProject = (projects[faker.random_int(0,number_of_projects-1)])
        projectId = assignedProject["ProjectId"]
        assignedUsers=(assignedProject["AssignedUsers"])
        assignedUser=(assignedUsers[faker.random_int(0,len(assignedUsers)-1)])
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
        #Adds the dictionary to the list
write(tasks_file_name,tasks)
#Common function that takes the preferred file name and the list to be written to file