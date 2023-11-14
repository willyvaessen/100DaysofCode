import random
import string

# The password generator below has been created by following the video on https://www.youtube.com/watch?v=XCIBOl3FTKo
def generate_password(min_length, numbers=True, special_characters=True):
    letters = string.ascii_letters
    digits = string.digits
    special = string.punctuation
    # print(letters, digits, special)

    characters = letters
    if numbers:
        characters += digits
    if special_characters:
        characters += special

    pwd = ""
    meets_criteria = False
    has_number = False
    has_special = False

    while not meets_criteria or len(pwd) < min_length:
        new_char = random.choice(characters)
        pwd += new_char

        if new_char in digits:
            has_number = True
        elif new_char in special:
            has_special = True

        meets_criteria = True
        if numbers:
            meets_criteria = has_number
        if special_characters:
            meets_criteria = meets_criteria and has_special

    return pwd


min_length = int(input("Enter the minimum length of the password: "))
require_number = input("Do you require numbers in the password (y/n? ").lower() == "y"
require_special = input("Do you require special characters in the password (y/n)? ").lower() == "y"

print(generate_password(min_length, require_number, require_special))
