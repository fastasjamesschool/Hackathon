'''
1. pip install faker
2. python make_random_things.py
It will create three JSON files that can be imported into mongo using mongoimport.
'''
from faker import Faker
import json
import random

faker = Faker()
customers_file_name = "customers.json"
products_file_name = "products.json"
orders_file_name = "orders.json"
customers = []
products = []
orders = []


def make_customers(number_of_customers_to_create: int) -> None:
    '''
    Create a bunch of fake customers
    '''
    for i in range(number_of_customers_to_create):
        customer = {
            'id': i+100,
            'first_name': faker.first_name(),
            'last_name': faker.last_name(),
            'address': faker.address(),
            'phone': faker.phone_number(),
            'email': faker.email(),
            'credit_card': {
                'pan': faker.credit_card_number(),
                'cvv': faker.credit_card_security_code(),
                'expire': faker.credit_card_expire(start="now", end="+7y"),
            }
        }
        customers.append(customer)

    with open(customers_file_name, 'w') as file:
        file.write(json.dumps(customers, indent=2))


def make_products(number_of_products_to_create: int = 10) -> None:
    '''
    Create a bunch of fake products
    '''
    for i in range(number_of_products_to_create):
        product = {
            'id': i+100,
            'name': ' '.join(faker.words(2)).capitalize(),   # Two words
            'description': faker.paragraph(nb_sentences=5),  # ~ 5 sentences
            'price': round(random.uniform(5.00, 38.99), 2),
            'quantity_on_hand': faker.random_int(0, 30),
        }
        products.append(product)

    with open(products_file_name, 'w') as file:
        file.write(json.dumps(products, indent=2))


def make_orders(number_of_orders_to_create: int) -> None:
    '''
    Create a bunch of fake orders
    '''
    def get_order_lines():
        order_lines = []
        for i in range(random.randint(1, 6)):
            line = {"product": random.choice(products),  # Gets a random element
                    "quantity": random.randint(1, 5)}
            order_lines.append(line)
        return order_lines
    for i in range(number_of_orders_to_create):
        order = {
            'id': i+100,
            'customer': random.choice(customers),
            'lines': get_order_lines(),
            # isoformat() to convert to a string b/c dates aren't JSON serializable.
            'order_date': faker.date_between(start_date='-10d', end_date='today').isoformat()
        }
        orders.append(order)

    with open(orders_file_name, 'w') as file:
        file.write(json.dumps(orders, indent=2))


# Make all the data
make_customers(100)
make_products(30)
make_orders(250)

print("Data was created")
