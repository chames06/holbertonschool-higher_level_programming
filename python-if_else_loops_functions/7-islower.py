#!/usr/bin/python3

def islower(c):
    """Check if a character is lowercase.
    
    Args:
        c: A character to check
        
    Returns:
        True if c is a lowercase letter, False otherwise
    """
    return ord(c) >= ord('a') and ord(c) <= ord('z')
