# Created by Dmitriry Shin on July 25, 2020
class Node(object):
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


def _checkBSTHelper(root, low, high):
    if root is None:
        return True
    data = root.data
    if (data > low and data < high) and _checkBSTHelper(root.left, low, data) and _checkBSTHelper(root.right, data, high):
        return True
    return False


def checkBST(root):
    return _checkBSTHelper(root, float('-inf'), float('inf'))


def main():
    node = Node(5)
    node.left = Node(1)
    node.right = Node(7)
    print(checkBST(node))  # True


if __name__ == "__main__":
    main()
