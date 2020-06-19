# Created by Dmitriy Shin on June 19, 2020
from functools import reduce


def main(student_marks: list, query_name: str):
    queried_student_marks = student_marks[query_name]
    avg = reduce(lambda a, b: a + b, queried_student_marks)
    print("{:.2f}".format(float(avg) / float(len(queried_student_marks))))


if __name__ == '__main__':
    main()
