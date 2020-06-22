# Created by Dmitriy Shin on June 23, 2020
# output = ''
# for c in s:
#     if c == c.lower():
#         output += c.upper()
#     else:
#         output += c.lower()
# return output


def swapCase(s: str) -> str:
    return ''.join([c.lower() if c.isupper() else c.upper() for c in s])


if __name__ == '__main__':
    print(swapCase("Hello World"))
