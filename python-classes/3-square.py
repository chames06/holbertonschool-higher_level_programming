#!/usr/bin/python3
"""Module defining a Square class able to compute its area."""

class Square:
    """Represents a square with a private, validated size."""

    def __init__(self, size=0):
        """Initialize the square, validating size."""
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        if size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size

    def area(self):
        """Return the area of the square."""
        return self.__size * self.__size
