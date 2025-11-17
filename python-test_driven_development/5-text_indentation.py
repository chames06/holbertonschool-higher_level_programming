#!/usr/bin/python3
"""Module that provides the text_indentation function."""


def text_indentation(text):
    """Print text with two new lines after '.', '?' and ':'."""
    if not isinstance(text, str):
        raise TypeError("text must be a string")

    separators = ".?:"
    current = ""

    for c in text:
        current += c
        if c in separators:
            print(current.strip())
            print()
            current = ""

    if current.strip():
        print(current.strip(), end="")
