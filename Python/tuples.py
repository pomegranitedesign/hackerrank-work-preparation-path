# Created by Dmitriy Shin on June 21, 2020

if __name__ == '__main__':
    n = int(input())
    integer_list = map(int, input().split())
    input_list = [int(x) for x in integer_list]
    t = hash(tuple(input_list))
    print(t)
