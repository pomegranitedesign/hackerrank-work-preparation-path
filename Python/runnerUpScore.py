# Created by Dmitriy Shin on June 18, 2020

def runnerUpScore(scores: list) -> int:
    return sorted(list(set(scores)))[-2]


if __name__ == '__main__':
    print(runnerUpScore([2, 3, 6, 6, 5]))  # 5
