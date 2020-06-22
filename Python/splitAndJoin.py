# Created by Dmitriy Shin on June 22, 2020

def split_and_join(line: str):
    return '-'.join(line.split(' '))


if __name__ == '__main__':
    print(split_and_join("Hello World"))  # Hello-World
    print(split_and_join("This is a string"))  # Hello-World
