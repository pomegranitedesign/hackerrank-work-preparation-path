# Created by Dmitriy Shin on June 24, 2020
from functools import reduce


def isVowel(ch):
    return (ch == 'a' or ch == 'e' or
            ch == 'i' or ch == 'o' or
            ch == 'u')


def isCons(ch):
    return (ch != 'a' and ch != 'e' and
            ch != 'i' and ch != 'o' and
            ch != 'u')


def minion_game(string: str) -> int:
    """
    :param string: Word<str>
    :return: <int>
    """
    player_1 = 'Stuart'  # Count consonants
    player_2 = 'Kevin'  # Count vowels
    vowels = 'aeiou'
    lower = string.lower()
    co = []
    vo = []
    n = len(string)
    for i in range(0, n + 1):
        co.append(0)
        vo.append(0)
    if isCons(lower[n-1]) == 1:
        co[n-1] = 1
    else:
        vo[n-1] = 1

    for i in range(n - 2, -1, -1):
        if isCons(lower[i]) == 1:
            co[i] = co[i+1] + 1
            vo[i] = vo[i+1]
        else:
            co[i] = co[i+1]
            vo[i] = vo[i+1]+1

    total_co = reduce(lambda a, b: a + b, co)
    total_vo = reduce(lambda a, b: a + b, vo)
    print(total_co, total_vo)
    if total_co > total_vo:
        return f"Kevin {total_co}"
    elif total_co < total_vo:
        return f"Stuart {total_vo}"
    elif total_co == total_vo:
        return "Draw"


if __name__ == '__main__':
    print(minion_game("BANANA"))  # Stuart 12
    print(minion_game("BANANANAAAS"))  # Draw
