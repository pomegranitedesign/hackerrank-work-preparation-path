# Created by Dmitriy Shin on July 4, 2020

def dynamicArray(n: int, queries: list):
    seq_list = [[] for i in range(n)]
    last_answer = 0
    result = []
    for q in queries:
        if q[0] == 1:
            seq = ((q[1] ^ last_answer) % n)
            seq_list[seq].append(q[2])
        elif q[0] == 2:
            seq = ((q[1] ^ last_answer) % n)
            last_answer = seq_list[seq][q[2] % len(seq_list[seq])]
            result.append(last_answer)
    return result


if __name__ == '__main__':
    dynamicArray(2, [[1, 0, 5], [1, 1, 7], [1, 0, 3],
                     [2, 1, 0], [2, 1, 1]])  # 7, 3
