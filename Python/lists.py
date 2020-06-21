# Created by Dmitriy Shin on June 21, 2020

def main(N):
    lst = []
    for i in range(N):
        s = input().split(' ')
        cmd = s[0]
        args = s[1:]
        if cmd != 'print':
            cmd += "(" + ",".join(args) + ")"
            eval("lst."+cmd)
        else:
            print(lst)


if __name__ == '__main__':
    N = int(input())
    main(N)
