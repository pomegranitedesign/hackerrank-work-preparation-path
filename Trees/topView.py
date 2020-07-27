# Created by Dmitriy Shin on July 27, 2020
class Node(object):
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


def printTop(root, dist, level, d):
    if root is None:
        return
    if dist not in d or level < d[dist][1]:
        d[dist] = (root.val, level)
    printTop(root.left, dist - 1, level + 1, d)
    printTop(root.right, dist + 1, level + 1, d)


def topView(root: Node):
    d = {}
    printTop(root, 0, 0, d)
    for key in sorted(d.keys()):
        print(d.get(key)[0], end=' ')


def main():
    root = Node(20)
    root.left = Node(30)
    root.right = Node(10)
    root.left.left = Node(8)
    root.right.right = Node(0)
    root.right.right.right = Node(3)
    root.left.left.left = Node(9)
    topView(root)


if __name__ == '__main__':
    main()
