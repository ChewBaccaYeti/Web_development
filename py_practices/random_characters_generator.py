import random
from faker import Faker

fake = Faker()

occupations = [
    "Explorer", "Alchemist", "Blacksmith", "Mage", "Bard", "Ranger",
    "Scholar", "Thief", "Knight", "Chef", "Merchant", "Librarian"
]

species = [
    "Human", "Elf", "Dwarf", "Orc", "Goblin", "Dragonborn",
    "Tiefling", "Gnome", "Halfling", "Vampire", "Werewolf", "Fey"
]


data = []
for _ in range(100):
    name = fake.name()
    occupation = random.choice(occupations)
    specie = random.choice(species)
    age = random.randint(18,100)
    data.append(f"{name}\t{occupation}\t{specie}\t{age}")


with open("random_characters.txt", "w") as file:
    file.write("Name\tOccupation\tSpecie\tAge\n")
    for entry in data:
        file.write(entry + "\n")


print("File 'random_characters.txt' has been generated with 100 random fictional characters.")