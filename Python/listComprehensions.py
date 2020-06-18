# Created by Dmitriy Shin on June 18, 2020

def listComprehension(x, y, z, N) -> None:
    return [[i, j, k] for i in range(x + 1) for j in range(y + 1) for k in range(z + 1) if i + j + k != N]


if __name__ == '__main__':
    print(listComprehension(1, 1, 1, 2))
    # [[0, 0, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0], [1, 1, 1]]
