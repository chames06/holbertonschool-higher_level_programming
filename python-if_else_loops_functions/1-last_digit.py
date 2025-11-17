#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)

# Get the last digit (preserving the sign for negative numbers)
last_digit = int(str(number)[-1])
if number < 0:
    last_digit = -last_digit

# Determine the condition
if last_digit > 5:
    condition = "and is greater than 5"
elif last_digit == 0:
    condition = "and is 0"
else:
    condition = "and is less than 6 and not 0"

# Print the result
print(f"Last digit of {number} is {last_digit} {condition}")
