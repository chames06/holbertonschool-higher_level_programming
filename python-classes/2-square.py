#!/usr/bin/python3
"""Module defining a Square class with size validation."""

class Square:
    """Represents a square with a validated private size."""

    def __init__(self, size=0):
        """Initialize the square with an optional validated size."""
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        if size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size
