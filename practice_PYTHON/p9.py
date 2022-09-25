############# Unit 23. 2차원 리스트 사용하기 ################

# 2차원으로 리스트 요소 출력하기

                       # for
a = [[10, 20], [30, 40], [50, 60]]

for x, y in a:
    print(x, y)

for i in a:
    for j in i:
        print(j, end=' ')
    print()

for i in range(len(a)):
    for j in range(len(a[i])):
        print(a[i][j], end=' ')
    print()


                        # while
i = 0 
while i < len(a):
    x, y = a[i]
    print(x, y)
    i += 1

i = 0 
while i < len(a):
    j = 0
    while j < len(a[i]):
        print(a[i][j], end=' ')
        j += 1
    print()
    i += 1


for i in range(3):
    line = []
    for j in range(2):
        line.append(0)
    a.append(line)

print(a)



a = [3, 1, 3, 2, 5]
b = []
for i in a:
    line = []
    for j in range(i):
        line.append(0)
    b.append(line)

print(b)



# 톱니형 2차원 리스트 생성하기
a  = [[0]*i for i in [3, 1, 3, 2]]
print(a)


#
students = [
    ['john', 'C', 19],
    ['maria', 'A', 25],
    ['andrew', 'B', 7]
]
print(sorted(students, key=lambda student: student[1]))



# 2차원 리스트 서로 다른 객체로 복사
a = [[10, 20], [30, 40]]

import copy
b = copy.deepcopy(a)   
b[0][0] = 500

print(a)
print(b)



# 연습문제 23.6 : 3차원 리스트 만들기
a = [[[0 for i in range(3)] for j in range(4)] for k in range(2)]
print(a)

























