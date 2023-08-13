from faker import Faker
import json

fake = Faker()

destinations = []

for _ in range(100):
    destination = {
        "image_url": "https://source.unsplash.com/random/500x500/?Travel",
        "destination_title": fake.city() + " " + fake.word(),
        "location": fake.country(),
        "grade": f"{fake.random_int(3, 5)} stars",
        "fees": f"${fake.random_int(300, 2000)}",
        "description": fake.paragraph()
    }
    destinations.append(destination)

with open('destinations.json', 'w') as json_file:
    json.dump(destinations, json_file, indent=4)
