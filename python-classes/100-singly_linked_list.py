#!/usr/bin/python3
"""Module defining Node and SinglyLinkedList classes for a sorted linked list."""


class Node:
    """Represents a node of a singly linked list."""

    def __init__(self, data, next_node=None):
        """Initialize a node with validated data and next_node."""
        self.data = data
        self.next_node = next_node

    @property
    def data(self):
        """Retrieve the data of the node."""
        return self.__data

    @data.setter
    def data(self, value):
        """Set the data, ensuring it is an integer."""
        if not isinstance(value, int):
            raise TypeError("data must be an integer")
        self.__data = value

    @property
    def next_node(self):
        """Retrieve the next node."""
        return self.__next_node

    @next_node.setter
    def next_node(self, value):
        """Set the next node, ensuring it is a Node or None."""
        if value is not None and not isinstance(value, Node):
            raise TypeError("next_node must be a Node object")
        self.__next_node = value


class SinglyLinkedList:
    """Represents a sorted singly linked list."""

    def __init__(self):
        """Initialize an empty singly linked list."""
        self.__head = None

    def __str__(self):
        """Return a string representation of the list."""
        nodes = []
        current = self.__head
        while current:
            nodes.append(str(current.data))
            current = current.next_node
        return "\n".join(nodes)

    def sorted_insert(self, value):
        """Insert a new Node into the list in increasing order."""
        new = Node(value)

        if self.__head is None or value < self.__head.data:
            new.next_node = self.__head
            self.__head = new
            return

        current = self.__head
        while current.next_node is not None and current.next_node.data < value:
            current = current.next_node

        new.next_node = current.next_node
        current.next_node = new
