# Created by Dmitriy Shin on July 29, 2020
def riddle(arr: list):
    output = []
    n = len(arr)
    for x in range(0, n):
        current_chunk_size = 1
        print(arr[x:x+current_chunk_size])
        current_chunk_size += 1
    return output


def main():
    sample_1 = [2, 6, 1, 12]
    sample_2 = [1, 2, 3, 5, 1, 13, 3]
    sample_3 = [3, 5, 4, 7, 6, 2]
    print(riddle(sample_1))  # [12, 2, 1, 1]
    # print(riddle(sample_2))  # [13, 3, 2, 1, 1, 1, 1]
    # print(riddle(sample_3))  # [7, 6, 4, 4, 3, 2]


if __name__ == "__main__":
    main()
