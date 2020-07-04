# Created by Dmitriy Shin on June 23, 2020
# Program name: Swap Nodes

class Node(object):
    def __init__(self, value=None):
        self.value = value
        self.left = None
        self.right = None


class BinaryTree(object):
    def __init__(self):
        self.root = None

    def insert(self, value):
        if self.root == None:
            self.root = Node(value)
        else:
            self._insert(value, self.root)

    def _insert(self, value, current_node):
        if value < current_node.value:
            if current_node.left == None:
                current_node.left = Node(value)
            else:
                self._insert(value, current_node.left)
        if value > current_node.value:
            if current_node.right == None:
                current_node.right = Node(value)
            else:
                self._insert(value, current_node.right)
        else:
            print("Value already in tree!")

    def print_tree(self):
        if self.root != None:
            self._print_tree(self.root)

    def _print_tree(self, current_node):
        if current_node != None:
            self._print_tree(current_node.left)
            print(str(current_node.value))
            self._print_tree(current_node.right)


def swap_nodes(indexes, queries):
    tree = BinaryTree()
    tree.root = Node(1)
    for i in range(len(indexes)):
        left, right = indexes[i]
        if left != -1:
            tree.insert(left)
        if right != -1:
            tree.insert(right)
    for query in queries:
        pass
    tree.print_tree()


if __name__ == '__main__':
    swap_nodes([[2, 3], [-1, -1], [-1, -1]], [1, 1])  # [3, 1, 2]\n[2, 1, 3]
