from faker import Faker
import json
import random

faker = Faker()
users_file_name = "customers.json"
projects_file_name= "projects.json"
orders_file_name = "orders.json"
users = []
projects = []
orders = []
number_of_projects = 100
number_of_users = 30

for i in range(number_of_users):
        firstName = faker.first_name()
        lastName = faker.last_name()
        username = firstName[0].join(lastName)
        for use in users:
             if username == use[username]:
                   username = username+1 
        user = {
            "Username": firstName[0].join(lastName),
            "First Name": firstName,
            "Last Name": lastName,
            "Password": faker.password(),
            "ManagerRole": faker.datatype.boolean(.25) #Designates a 25% chance that the worker is a manager
        }
        users.append(user)


for i in range(number_of_projects):
        project = {
            "ProjectId":i,
            "ProjectName":' '.join(faker.words(2)).capitalize(),
            'Description': faker.paragraph(nb_sentences=5),
            "Project Team Size":faker.random_int(1,5),
            "Budget":faker.random_int(3000, 50000),
            "Workload":faker.random_int(15,85),
            "Completion Time":faker.random_int(10, 115),
        }
        projects.append(project)

with open(users_file_name, 'w') as file:
    file.write(json.dumps(users, indent=2))
with open(projects_file_name, 'w') as file:
    file.write(json.dumps(projects, indent=2))