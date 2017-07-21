'''
game hosted by GitHub www.github.com

'''
def creditsyay():
    print("Hosted by GitHub")
    print("Made by Zeplin-Reaper on GitHub. link: https://github.com/Zeplin-Reapers")
    guess()
from random import random
import math
number = random() * 100
number = math.ceil(number)
print(number)
def guess():
    uNumber = input("Enter a number: ")
    if int(uNumber) == number:
        print("correct!")
    elif uNumber == "credits()":
        creditsyay()
    else:
        print("Guess Again")
        guess()
def main():
    guess()

main()
