#!/usr/bin/python3
def print_square(size):
    """Prints a square of # characters"""

    # Type check
    if not isinstance(size, int):
        raise TypeError("size must be an integer")

    # Value check
    if size < 0:
        raise ValueError("size must be >= 0")

    # Print the square
    for _ in range(size):
        print("#" * size)
