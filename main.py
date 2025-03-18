import random

# Define suspects, weapons, and locations
suspects = ["Alice", "Bob", "Carol", "Eddie"]
weapons = ["Dagger", "Gun", "Rope", "Knife"]
locations = ["Store", "Library", "Theater", "Museum"]

def generate_solution(seed):
    random.seed(seed)
    # Shuffle suspects, weapons, and locations independently
    random.shuffle(suspects)
    random.shuffle(weapons)
    random.shuffle(locations)

    # Create the solution list with one combination for each suspect, weapon, and location
    solution = []
    for suspect, weapon, location in zip(suspects, weapons, locations):
        solution.append({"suspect": suspect, "weapon": weapon, "location": location, "isMurderer": False})

    # Randomly select one combination to be the murderer
    murderer_index = random.randint(0, len(solution) - 1)
    solution[murderer_index]["isMurderer"] = True  # Mark the random combination as the murderer
    return solution


# Get a Direct Hint: A hint that directly reveals a fact
def getDirectHint(solution):
    hint = {}
    category = random.choice(["suspect/location", "suspect/weapon", "weapon/location","suspect/location", "suspect/weapon", "weapon/location", "murderer"])

    if category == "suspect/location":
        selected = random.choice(solution)
        hint["text"] = f"{selected['suspect']} was at the {selected['location']}."
        hint["details"] = (selected['suspect'],selected['location'])

    elif category == "suspect/weapon":
        selected = random.choice(solution)

        hint["text"] = f"{selected['suspect']} had the {selected['weapon']}."
        hint["details"] = (selected['suspect'],selected['weapon'])

    elif category == "weapon/location":
        selected = random.choice(solution)

        hint["text"] = f"The {selected['weapon']} was at the {selected['location']}."
        hint["details"] = (selected['weapon'],selected['location'])

    elif category == "murderer":
        murdererClueType = random.randint(1, 3)  # Randomly choose one of the three murderer clues
        murderer = next(item for item in solution if item["isMurderer"])
        if murdererClueType == 1:
            hint["text"] = f"{murderer['suspect']} was the murderer."
            hint["details"] = (murderer['suspect'],"was the murderer")
        elif murdererClueType == 2:

            hint["text"] = f"The {murderer['weapon']} was used by the murderer."
            hint["details"] = (murderer['weapon'],"was the murder weapon")
        elif murdererClueType == 3:
            hint["text"] = f"The murder happened at the {murderer['location']}."
            hint["details"] = (murderer['location'],"was the murder location")

    return hint


# Get an Indirect Hint: A hint that provides a clue without directly revealing the solution
def getIndirectHint(solution):
    hint = {}
    category = random.choice(["suspect/location", "suspect/weapon", "weapon/location", "suspect/location", "suspect/weapon", "weapon/location", "murderer"])

    if category == "suspect/location":
        suspect = random.choice(solution)
        possible_locations = list(set(item["location"] for item in solution) - {suspect["location"]})
        location = random.choice(possible_locations)
        hint["text"] = random.choice([
            f"{suspect['suspect']} was NOT at the {location}.",
            f"{suspect['suspect']} has never been to the {location}.",
            f"{suspect['suspect']} was never near the {location}.",
            f"{suspect['suspect']} was somewhere other than the {location}.",
            f"Nobody saw {suspect['suspect']} at the {location}.",
            f"{suspect['suspect']} was not anywhere close to the {location}.",
            f"There's no record of {suspect['suspect']} being at the {location}.",
            f"{suspect['suspect']} was not involved in anything at the {location}.",
            f"{suspect['suspect']} has no connection to the {location}."
            f"No one at the {location} had seen {suspect['suspect']}.",
            f"Witnesses at the {location} did not see {suspect['suspect']}.",
            f"People at the {location} did not recognize {suspect['suspect']}.",
            f"Eyewitnesses at the {location} did not notice {suspect['suspect']}.",
            f"Reports from the {location} confirm {suspect['suspect']} was not there.",
            f"Security at the {location} did not record {suspect['suspect']}.",
            f"There were no sightings of {suspect['suspect']} at the {location}."
        ])
        hint["details"] = (suspect['suspect'],"not "+location)

    elif category == "suspect/weapon":
        suspect = random.choice(solution)
        possible_weapons = list(set(item["weapon"] for item in solution) - {suspect["weapon"]})
        weapon = random.choice(possible_weapons)
        hint["text"] = random.choice([
            f"{suspect['suspect']} did NOT have the {weapon}.",
            f"{suspect['suspect']} does not own a {weapon}.",
            f"{suspect['suspect']} saw someone else with the {weapon}.",
            f"{suspect['suspect']} was not seen with the {weapon}.",
            f"{suspect['suspect']} never touched the {weapon}.",
            f"{suspect['suspect']} was not carrying the {weapon}.",
            f"{suspect['suspect']} was not the one holding the {weapon}.",
            f"{suspect['suspect']} had no reason to have the {weapon}.",
            f"The {weapon} does not belong to {suspect['suspect']}.",
            f"The {weapon} was not in {suspect['suspect']}'s possession.",
            f"The {weapon} was never with {suspect['suspect']}.",
            f"The {weapon} was not found with {suspect['suspect']}."
        ])
        hint["details"] = (suspect['suspect'],"not "+weapon)

    elif category == "weapon/location":
        weapon = random.choice(solution)
        possible_locations = list(set(item["location"] for item in solution) - {weapon["location"]})
        location = random.choice(possible_locations)
        hint["text"] = f"{weapon['weapon']} was NOT found at the {location}."
        hint["details"] = (weapon['weapon'],"not "+location)

    elif category == "murderer":
        murdererClueType = random.randint(1, 3)
        notMurderer = random.choice([item for item in solution if item["isMurderer"] == False])
        if murdererClueType == 1:
            hint["text"] = f"{notMurderer['suspect']} was NOT the murderer."
            hint["details"] = (notMurderer['suspect'],"not murderer")
        elif murdererClueType == 2:
            hint["text"] = f"The murderer did NOT use the {notMurderer['weapon']}."
            hint["details"] = (notMurderer['weapon'],"not murder weapon")
        elif murdererClueType == 3:
            hint["text"] = f"The murder was NOT committed at the {notMurderer['location']}."
            hint["details"] = (notMurderer['location'],"not murder location")

    return hint


def generate_hint(solution, hint_number):
    if random.random() < 1/15 * hint_number:
        return getDirectHint(solution)
    else:
        return getIndirectHint(solution)

# Display the grid
def display_grid():
    print("\nLogic Grid Puzzle:")
    print(f"Suspects: {suspects}")
    print(f"Weapons: {weapons}")
    print(f"Locations: {locations}")
    print("\n")

# Main game loop
def play_game(seed):
    hints = []
    hint_number = 1

    print("Welcome to the Logic Grid Puzzle!\n")

    display_grid()
    solution = generate_solution(seed)
    while True:
        # prompt the user
        print("What would you like to do?\n  1. Get a hint\n  2. Solve the puzzle")
        userChoice = input()
        if userChoice == "1":
            nextHint = generate_hint(solution, hint_number)
            for i in range(50):
                if(nextHint["details"] not in hints):
                    break
                nextHint = generate_hint(solution, hint_number)
            hints.append(nextHint["details"])
            print("*"*hint_number)
            print(f"Hint #{hint_number}: {nextHint['text']}")
            print("*"*hint_number)
            hint_number += 1
        if userChoice == "2":
            finalGuess(solution)
            break


def finalGuess(solution):
    # Allow the player to guess the solution
    print("\nCan you solve the puzzle?")
    guess_suspect = input("Enter your guess for the suspect: ")
    guess_weapon = input("Enter your guess for the weapon: ")
    guess_location = input("Enter your guess for the location: ")

    # Find the solution with the murderer
    murderer = next((item for item in solution if item["isMurderer"]), None)

    if murderer and guess_suspect.lower() == murderer["suspect"].lower() and guess_weapon.lower() == murderer["weapon"].lower() and guess_location.lower() == murderer["location"].lower():
        print("\nCongratulations, you've solved the puzzle!")
    else:
        print("\nOops, that's not the correct solution.")
        print(f"The correct solution was: {murderer['suspect']} with the {murderer['weapon']} in the {murderer['location']}.\n")

def main():
    seed = int(input("Enter a seed number for the puzzle: "))
    play_game(seed)

# # Set up the game
# from colorama import *




import pygame
import math
pygame.init()
screen = pygame.display.set_mode((400, 300))
done = False
white=(255,255,255)
red = (255,0,0)
green = (0,255,0)
blue = (0,0,255)
textY = 150
bg = (127,127,255) 
clock = pygame.time.Clock()
font = pygame.font.SysFont("Arial", 36)
txtsurf = font.render("Hello, World", True, white)
while not done:
    
    clock.tick()
    screen.fill(bg)
    screen.blit(txtsurf,(math.cos(pygame.time.get_ticks() *0.0015)*100+200 - txtsurf.get_width() // 2, math.sin(pygame.time.get_ticks() *0.0019)*100+150 - txtsurf.get_height() // 2))
    screen.blit(txtsurf,(math.cos(pygame.time.get_ticks() *0.0013)*200+200 - txtsurf.get_width() // 2, math.sin(pygame.time.get_ticks() *0.001)*150+150 - txtsurf.get_height() // 2))
    pygame.display.update()
    for event in pygame.event.get():
      
      if event.type == pygame.QUIT:
         done = True
      
   



# if __name__ == "__main__":
#     init()
#     print(Fore.BLACK,Back.GREEN)
#     main()


# suspects = ["Alice", "Bob", "Charlie"]
# weapons = ["Dagger", "Gun", "Rope"]
# locations = ["Store", "Library", "Theater"]

# solution = [
#   {"suspect":"Alice", "weapon":"Dagger", "location":"Store","isMurderer":false},
#   {"suspect":"Bob", "weapon":"Gun", "location":"Library","isMurderer":false},
#   {"suspect":"Charlie", "weapon":"Rope", "location":"Theater","isMurderer":true}
# ]


