# Created by Dmitiry Shin on July 22, 2020

class Node(object):
    def __init__(self, val):
        self.info = val
        self.left = None
        self.right = None


def lca(root, v1, v2) -> Node:
    # Check if the current node is None
    if root is None:
        return None

    # If any of values being searched equal to current node's info
    # return the current node
    if root.info == v1 or root.info == v2:
        return root

    # Recursion
    left = lca(root.left, v1, v2)
    right = lca(root.right, v1, v2)

    if not left is None and not right is None:
        return root
    if left is None and right is None:
        return None

    return left if not left is None else right


def main():
    node = Node(2)
    node.left = Node(23)
    node.left.left = Node(43)
    node.right = Node(4)
    node.right.right = Node(90)
    print(lca(node, 43, 23).info)


if __name__ == '__main__':
    main()
