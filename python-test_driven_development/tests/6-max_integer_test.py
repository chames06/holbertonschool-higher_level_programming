#!/usr/bin/python3
"""Unittest for max_integer([..])
"""
import unittest
max_integer = __import__('6-max_integer').max_integer


class TestMaxInteger(unittest.TestCase):
    """Test cases for the max_integer function"""

    def test_max_at_the_end(self):
        """Test when max is at the end of the list"""
        self.assertEqual(max_integer([1, 2, 3, 4]), 4)

    def test_max_at_the_beginning(self):
        """Test when max is at the beginning of the list"""
        self.assertEqual(max_integer([4, 3, 2, 1]), 4)

    def test_max_at_the_middle(self):
        """Test when max is in the middle of the list"""
        self.assertEqual(max_integer([1, 3, 4, 2]), 4)

    def test_one_element_list(self):
        """Test with a list containing only one element"""
        self.assertEqual(max_integer([5]), 5)

    def test_two_elements_list(self):
        """Test with a list containing two elements"""
        self.assertEqual(max_integer([2, 7]), 7)

    def test_empty_list(self):
        """Test with an empty list"""
        self.assertIsNone(max_integer([]))

    def test_all_same_elements(self):
        """Test with a list where all elements are the same"""
        self.assertEqual(max_integer([5, 5, 5, 5]), 5)

    def test_negative_numbers(self):
        """Test with negative numbers"""
        self.assertEqual(max_integer([-1, -2, -3, -4]), -1)

    def test_mixed_positive_and_negative(self):
        """Test with mixed positive and negative numbers"""
        self.assertEqual(max_integer([-5, 3, -2, 10, 0]), 10)

    def test_large_numbers(self):
        """Test with large numbers"""
        self.assertEqual(max_integer([1000000, 999999, 1000001]), 1000001)

    def test_default_parameter(self):
        """Test that the function works with default empty list parameter"""
        self.assertIsNone(max_integer())


if __name__ == '__main__':
    unittest.main()
