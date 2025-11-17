#!/usr/bin/python3
"""Module defining a Square class supporting numeric size and comparison."""


class Square:
    """Represent a square with a numeric size, supporting comparisons."""

    def __init__(self, size=0):
        """Initialize the square with a validated numeric size."""
        self.size = size

    @property
    def size(self):
        """Retrieve the size of the square."""
        return self.__size

    @size.setter
    def size(self, value):
        """Set the size ensuring it is a number >= 0."""
        if not isinstance(value, (int, float)):
            raise TypeError("size must be a number")
        if value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    def area(self):
        """Return the area of the square."""
        return self.__size * self.__size

    # Comparison operators based on area:

    def __eq__(self, other):
        """== comparison."""
        return self.area() == other.area()

    def __ne__(self, other):
        """!= comparison."""
        return self.area() != other.area()

    def __gt__(self, other):
        """> comparison."""
        return self.area() > other.area()

    def __ge__(self, other):
        """>= comparison."""
        return self.area() >= other.area()

    def __lt__(self, other):
        """< comparison."""
        return self.area() < other.area()

    def __le__(self, other):
        """<= comparison."""
        return self.area() <= other.area()
