# Created by Dmitriy Shin on June 19, 2020
import re


def count_substrings(string: str, substring: str) -> int:
    starting_index = string.find(substring)
    for i in range(starting_index, len(string)):
        print(string[i])


if __name__ == '__main__':
    print(count_substrings('ABCDDEFDEF', 'DEF'))  # 2
    print(count_substrings('ABCDCDC', 'CDC'))
