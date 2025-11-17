#!/usr/bin/python3
"""Unittests for max_integer function."""

import unittest
max_integer = __import__('6-max_integer').max_integer


class TestMaxInteger(unittest.TestCase):
    """Test cases for the max_integer function."""

    def test_basic_list(self):
        self.assertEqual(max_integer([1, 2, 3, 4]), 4)
        self.assertEqual(max_integer([1, 3, 4, 2]), 4)

    def test_negative_numbers(self):
        self.assertEqual(max_integer([-5, -1, -7]), -1)

    def test_mixed_values(self):
        self.assertEqual(max_integer([-10, 5, 0, 2]), 5)

    def test_single_element(self):
        self.assertEqual(max_integer([7]), 7)

    def test_empty_list(self):
        self.assertIsNone(max_integer([]))

    def test_none_argument(self):
        with self.assertRaises(TypeError):
            max_integer(None)

    def test_strings(self):
        self.assertEqual(max_integer(["a", "c", "b"]), "c")

    def test_string_as_iterable(self):
        self.assertEqual(max_integer("abcd"), "d")

    def test_floats(self):
        self.assertEqual(max_integer([1.2, 3.5, 2.8]), 3.5)

    def test_list_with_equal_elements(self):
        self.assertEqual(max_integer([5, 5, 5, 5]), 5)


if __name__ == "__main__":
    unittest.main()
