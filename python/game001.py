'''
game hosted by GitHub www.github.com

'''
import random
while True:
    try:
        max = int(input("\nI want the odds to be 1 in "))
        count = int(input("\nHow many guesses do you want? "))
    except ValueError:
        print("\nInvalid Entry. Please Try Again!")
        continue
    num = random.randint(1,max)
    total = count
    break
while count > 0:
    try:
        guess = int(input("\nYou have {} guesses left! Guess a number between 1 and {} ".format(count,max)))
    except ValueError:
        print("\nInvalid Entry. Please Try Again!")
        continue
    count = count - 1
    if guess == num:
        print("\nCorrect! You guessed it in {} guesses!".format(total - count))
        quit()
    print("\nIncorrect. Sorry! Try Again!")
print("\nSorry, you are out of guesses. Good luck next time! The number was ", num)    
