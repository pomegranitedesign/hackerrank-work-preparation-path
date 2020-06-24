# Created by Dmitriy Shin on June 19, 2020
def count_substrings(string: str, substring: str) -> int:
    splitted = [string[i:i+len(substring)] for i in range(len(string))]
    return len([s for s in splitted if s == substring])


if __name__ == '__main__':
    print(count_substrings('ABCDDEFDEF', 'DEF'))  # 2
    print(count_substrings('ABCDCDC', 'CDC'))  # 2
