#!/usr/bin/python3
def text_indentation(text):
    if not isinstance(text, str):
        raise TypeError("text must be a string")

    separators = ".?:"
    result = ""
    current = ""

    for char in text:
        current += char
        if char in separators:
            # Strip leading/trailing spaces and print
            print(current.strip())
            print()
            current = ""

    # Print the last chunk if non-empty
    if current.strip():
        print(current.strip(), end="")
