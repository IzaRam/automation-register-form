""" Generate users """
from faker import Faker

fake = Faker()

user_data = {}

person = fake.profile()

user_data['email'] = person['mail']

user_data['gender'] = person['sex']

full_name = person['name'].split(" ")

user_data['first_name'] = full_name[0]
user_data['last_name'] = full_name[1]

user_data['password'] = fake.password()

birthdate = person['birthdate']

user_data['day'] =str(birthdate.day)
user_data['month'] =str(birthdate.month)
user_data['year'] =str(birthdate.year)

user_data['company'] = person['company']

full_address = fake.address().split("\n")

user_data['address1'] = full_address[0]
user_data['address2'] = full_address[1]

user_data['city'] = full_address[1].split(",")[0]

state = full_address[1].split(",")[1].strip().split(" ")[0]

with open("states.txt") as file:
    for line in file:
        name = line.split("\t")[0]
        sigla = line.split("\t")[1].replace("\n", "")
        if state == sigla:
            user_data['state'] = name


user_data['postal_code'] = str(full_address[1].split(",")[1].strip().split(" ")[1])
