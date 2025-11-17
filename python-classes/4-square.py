#!/usr/bin/python3
"""Module defining a Square class with getter and setter for size."""

class Square:
    """Represents a square with controlled access to its size."""

    def __init__(self, size=0):
        """Initialize the square using the size setter for validation."""
        self.size = size

    @property
    def size(self):
        """Retrieve the size of the square."""
        return self.__size

    @size.setter
    def size(self, value):
        """Set the size of the square with validation."""
        if not isinstance(value, int):
            raise TypeError("size must be an integer")
        if value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    def area(self):
        """Return the area of the square."""
        return self.__size * self.__size
