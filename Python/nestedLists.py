# Created by Dmitriy Shin on June 18, 2020

def byName(item: list) -> str:
    return item[0]


def byScore(item: list) -> int:
    return item[1]


def nestedLists(arr: list) -> None:
    second_highest = sorted(list(set([marks for name, marks in arr])))[1]
    print('\n'.join([a for a, b in sorted(arr) if b == second_highest]))


if __name__ == '__main__':
    # nestedLists([
    #     ["Harry",
    #      37.21, ],
    #     ["Berry",
    #      37.21, ],
    #     ["Tina",
    #      37.2, ],
    #     ["Akriti",
    #      41, ],
    #     ["Harsh",
    #      39]
    # ])

    nestedLists([
        ["Harsh",
         20],
        ["Beria",
         20],
        ["Varun",
         19],
        ["Kakunami",
         19],
        ["Vikas",
         21]
    ])
