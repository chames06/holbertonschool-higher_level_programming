#!/usr/bin/python3
"""This module provides a function to add two integers.
The function ensures both arguments are numbers.
Floats are cast to integers before addition.
"""


def add_integer(a, b=98):
    """Return the integer sum of a and b.
    Floats are cast to integers.
    """
    if not isinstance(a, (int, float)):
        raise TypeError("a must be an integer")

    if not isinstance(b, (int, float)):
        raise TypeError("b must be an integer")

    return int(a) + int(b)
